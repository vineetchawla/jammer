const express = require("express");
const Jam = require("./../models/Jam");

const auth = require("./../middleware/auth");

const router = express.Router();

//select a jam with profile
router.post("/join", auth, async (req, res) => {
  try {
    const user = req.user;
    const { name } = req.body;
    await Jam.updateOne({ name }, { $push: { usersAccepted: user.id } });
    res.send("done");
  } catch (error) {}
});

// remove user from jam
router.delete("/remove/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const name = req.params.jamName;
    console.log(user.id, name);

    await Jam.updateOne({ name }, { $pull: { usersAccepted: user.id } });
    res.send("done");
  } catch (err) {}
});

router.get("/start/:jamName", auth, async (req, res) => {
  try {
    const name = req.params.jamName;
    await Jam.updateOne({ name }, { active: true });
    res.send("done");
  } catch (err) {}
});

module.exports = router;
