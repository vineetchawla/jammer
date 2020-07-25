const express = require("express");

const Skill = require("./../models/Skill");
const auth = require("./../middleware/auth");
const getSkillsByUserId = require("./../middleware/getSkillsByUserId");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    let skill = {};
    skill.user = req.user.id;
    skill.instruments = req.body.instruments;

    await Skill.create(skill);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.put("/", auth, async (req, res) => {
  try {
    const user = req.user;
    const instruments = req.body;
    await updateSkill(user, instruments);
    res.send(201);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = req.user;
    const userSkills = await getSkillsByUserId(user.id);
    res.send(userSkills.instruments);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
