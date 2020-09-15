const express = require("express");

const Address = require("./addresses.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const addresses = await Address.query()
    .select(
      "id",
      "address_line_1",
      "address_line_2",
      "address_line_3",
      "country",
      "created_at",
      "is_default",
      "locality",
      "postal_code",
      "region",
      "type",
      "updated_at"
    )
    .where("deleted_at", null);
  res.json(addresses);
});

router.post("/", async (req, res, next) => {
  const {
    address_line_1,
    address_line_2,
    address_line_3,
    country,
    is_default,
    locality,
    postal_code,
    region,
    type,
    profile_id,
    user_id,
  } = req.body;

  try {
    const address = {
      address_line_1,
      address_line_2,
      address_line_3,
      country,
      is_default,
      locality,
      postal_code,
      region,
      type,
      profile_id,
      user_id,
    };

    const newAddress = await Address.query().insert(address);

    res.json({ address: newAddress });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
