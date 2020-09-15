const express = require("express");

const Card = require("./cards.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const cards = await Card.query()
    .select(
      "id",
      "brand",
      "cardholder_name",
      "exp_month",
      "exp_year",
      "last_4",
      "zipcode",
      "updated_at"
    )
    .where("deleted_at", null);
  res.json(cards);
});

router.post("/", async (req, res, next) => {
  const {
    brand,
    card_cvc,
    cardholder_name,
    exp_month,
    exp_year,
    is_giftcard,
    last_4,
    zipcode,
    payment_method_id,
    user_id,
  } = req.body;

  try {
    const card = {
      brand,
      card_cvc,
      cardholder_name,
      exp_month,
      exp_year,
      is_giftcard,
      last_4,
      zipcode,
      payment_method_id,
      user_id,
    };

    const newCard = await Card.query().insert(card);
    res.json({ card: newCard });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
