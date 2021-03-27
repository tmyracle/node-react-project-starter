const express = require("express");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
const jwt = require("../../lib/jwt");
const User = require("../users/users.model");
const { authenticateToken } = require("../../middlewares");
const mailer = require("../../lib/mailer");

const router = express.Router();

router.post("/start", async (req, res, next) => {
  const { email, first_name, last_name } = req.body;
  let code;

  try {
    let currentUser = await User.query().where("email", email).first();
    if (!currentUser) {
      const newUser = {
        email,
        first_name,
        last_name,
      };
      currentUser = await User.query().insert(newUser);
    }

    code = Math.floor(Math.random() * (999999 - 100001) + 100000);
    console.log(`Here is your one time use code: ${code}`);

    const hashedCode = await bcrypt.hash(code.toString(), 12);
    const updatedUser = await currentUser
      .$query()
      .patchAndFetch({ code: hashedCode });

    res.json({ user: updatedUser });
  } catch (error) {
    next(error);
  }

  let mailTransporter = await mailer.initTransporter().catch(console.error);
  const sender = '"Fred Foo 👻" <foo@example.com>';
  const receiver = email;
  const subject = "Login Code";
  const text = `Your one time use login code is: ${code}`;

  mailer
    .send(mailTransporter, sender, receiver, subject, text)
    .catch(console.error);
});

router.post("/confirm", async (req, res, next) => {
  const { email, code } = req.body;

  try {
    const user = await User.query().where("email", email).first();

    if (!user) {
      const error = new Error("Could not find user with that email address.");
      res.sendStatus(403);
      throw error;
    }

    const validCode = await bcrypt.compare(code, user.code);
    if (!validCode) {
      const error = new Error("Invalid code provided");
      res.sendStatus(403);
      throw error;
    }

    await User.query().patch({ code: "" }).findById(user.id);

    const payload = {
      id: user.id,
      email,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/is_authenticated", async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    jsonWebToken.verify(
      token,
      process.env.JWT_SECRET_TOKEN,
      (err, decodedToken) => {
        if (err) {
          res.json({ isAuthenticated: false });
        } else {
          const user = User.query()
            .findById(decodedToken.id)
            .select(
              "id",
              "first_name",
              "last_name",
              "email",
              "date_of_birth",
              "created_at",
              "updated_at"
            )
            .then((user) => {
              if (user) {
                res.json({ isAuthenticated: true, user: user });
              } else {
                res.json({ isAuthenticated: false });
              }
            });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
