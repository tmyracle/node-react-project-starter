const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("../../lib/jwt");
const User = require("../users/users.model");
const Profile = require("../profiles/profiles.model");

const router = express.Router();

router.post("/start", async (req, res, next) => {
  const { email, first_name, last_name } = req.body;
  try {
    let currentUser = await User.query().where("email", email).first();
    if (!currentUser) {
      //create a profile and user and save to db
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

module.exports = router;
