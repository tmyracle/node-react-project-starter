const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middlewares");

const Profile = require("./profiles.model");

router.get("/", async (req, res, next) => {
  try {
    const profiles = await Profile.query()
      .where("deleted_at", null)
      .withGraphFetched("payment_methods.card")
      .withGraphFetched("addresses")
      .withGraphFetched("user");
    res.json(profiles);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const profile = await Profile.query()
      .where("deleted_at", null)
      .andWhere("id", req.params.id)
      .withGraphFetched("payment_methods.card")
      .withGraphFetched("addresses")
      .withGraphFetched("user(limitedData)")
      .modifiers({
        limitedData(builder) {
          builder.select(
            "id",
            "first_name",
            "last_name",
            "email",
            "date_of_birth",
            "created_at",
            "updated_at"
          );
        },
      })
      .first();
    res.json(profile);
  } catch (error) {
    next(error);
  }
});

router.post("/", authenticateToken, async (req, res, next) => {
  try {
    // TODO: set user id by logged in user
    const profile = await Profile.query().insert(req.body);
    res.json(profile);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
