const express = require("express");
const { authenticateToken } = require("../../middlewares");

const PaymentMethod = require("./payment_methods.model");

const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res, next) => {
  try {
    const payment_methods = await PaymentMethod.query()
      .where("deleted_at", null)
      .withGraphFetched("card");
    res.json(payment_methods);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const payment_method = await PaymentMethod.query()
      .where("deleted_at", null)
      .andWhere("id", req.params.id)
      .withGraphFetched("card")
      .first();
    res.json(payment_method);
  } catch (error) {
    next(error);
  }
});

router.post("/", authenticateToken, async (req, res, next) => {
  try {
    // TODO: set user id by logged in user
    const payment_method = await PaymentMethod.query().insert(req.body);
    res.json(payment_method);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
