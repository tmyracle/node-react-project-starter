const express = require("express");

const addresses = require("./addresses/addresses.routes");
const auth = require("./auth/auth.routes");
const cards = require("./cards/cards.routes");
const payment_methods = require("./payment_methods/payment_methods.routes");
const profiles = require("./profiles/profiles.routes");
const users = require("./users/users.routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/addresses", addresses);
router.use("/auth", auth);
router.use("/cards", cards);
router.use("/payment_methods", payment_methods);
router.use("/profiles", profiles);
router.use("/users", users);

module.exports = router;
