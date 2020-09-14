const express = require("express");

const addresses = require("./addresses/addresses.routes");
const auth = require("./auth/auth.routes");
const cards = require("./cards/cards.routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/addresses", addresses);
router.use("/auth", auth);
router.use("/cards", cards);

module.exports = router;
