const express = require("express");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
const jwt = require("../../lib/jwt");
const User = require("../users/users.model");
const Profile = require("../profiles/profiles.model");
const { authenticateToken } = require("../../middlewares");

const router = express.Router();

router.post("/start", async (req, res, next) => {
  const { email, first_name, last_name } = req.body;
  try {
    let currentUser = await User.query().where("email", email).first();
    if (!currentUser) {
      const profile = {
        default_email: email,
      };

      newProfile = await Profile.query().insert(profile);

      const newUser = {
        email,
        first_name,
        last_name,
        profile_id: newProfile.id,
      };
      currentUser = await User.query().insert(newUser);
    }

    const code = Math.floor(Math.random() * (999999 - 100001) + 100000);
    console.log(`Here is your one time use code: ${code}`);

    const hashedCode = await bcrypt.hash(code.toString(), 12);
    const updatedUser = await currentUser
      .$query()
      .patchAndFetch({ code: hashedCode });

    res.json({ user: updatedUser });
  } catch (error) {
    next(error);
  }
  // Send email with code in it
  // Have a default code valid length (10 minutes?)
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
    if (token == null) res.json({ isAuthenticated: false });

    jsonWebToken.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
      if (err) res.json({ isAuthenticated: false });
      res.json({ isAuthenticated: true });
    });
  } catch (error) {
    next(error);
  }
});

router.get("/current_user", authenticateToken, async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      const error = new Error("No token provided");
      next(error);
    }
    jsonWebToken.verify(
      token,
      process.env.JWT_SECRET_TOKEN,
      async (err, decoded) => {
        if (err) {
          next(err);
        }
        const user = await User.query()
          .findById(decoded.id)
          .select(
            "id",
            "first_name",
            "last_name",
            "date_of_birth",
            "profile_id",
            "created_at",
            "updated_at"
          );
        res.json({ user });
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
