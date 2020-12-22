const express = require("express");

const User = require("./users.model");
const { authenticateToken } = require("../../middlewares");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.query()
    .select(
      "id",
      "email",
      "first_name",
      "last_name",
      "created_at",
      "updated_at"
    )
    .where("deleted_at", null);
  res.json(users);
});

router.post("/update", authenticateToken, async (req, res, next) =>{
  const {first_name, last_name} = req.body;
  const user_id = req.user.id;

  try {
    const updatedUser = await User.query().patchAndFetchById(user_id, {
      first_name,
      last_name
    });

    res.json({
      user: updatedUser
    })
  } catch(error) {
    next(error);
  }
})

module.exports = router;
