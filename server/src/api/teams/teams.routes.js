const express = require("express");

const Team = require("./teams.model");
const { authenticateToken } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  const teams = await Team.query()
    .select("id", "name", "created_at", "updated_at")
    .where("deleted_at", null)
    .withGraphFetched("owner")
    .withGraphFetched("users");
  res.json(teams);
});

router.post("/create", authenticateToken, async (req, res, next) => {
  const newTeam = {
    name: req.body.name,
    owner_id: req.user.id,
  };

  try {
    const createdTeam = await Team.query().insert(newTeam);
    await createdTeam.$relatedQuery("users").relate(req.user.id);
    res.json({ team: createdTeam });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
