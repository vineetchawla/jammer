const express = require("express");
const Jam = require("./../models/Jam");
const auth = require("./../middleware/auth");

const router = express.Router();

//select a jam with profile
router.post("/join", auth, async (req, res) => {
  try {
    const user = req.user;
    const { name } = req.body;
    // verify if the role of the user is available in the jam
    await Jam.updateOne({ name }, { $push: { usersAccepted: user.id } });
    res.send("done");
  } catch (error) {
    res.status(400).send(error);
  }
});

// remove user from jam
router.delete("/remove/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const name = req.params.jamName;
    await Jam.updateOne({ name }, { $pull: { usersAccepted: user.id } });
    res.send("done");
  } catch (err) {
    res.status(400).send(error);
  }
});

router.get("/start/:jamName", auth, async (req, res) => {
  try {
    const name = req.params.jamName;
    // verify if jam has filled all roles. usersAccepted[].length = totalMembers
    await Jam.updateOne({ name }, { active: true });
    //notify all user emails belonging to user in usersAccepted[]
    res.send("done");
  } catch (err) {
    res.status(400).send(error);
  }
});

module.exports = router;
