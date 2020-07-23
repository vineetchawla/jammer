//create jam, requires userid, N number of members, and N Bandroles

const express = require("express");
const Jam = require("./../models/Jam");

const auth = require("./../middleware/auth");

const router = express.Router();

router.post("/create", auth, async (req, res) => {
  try {
    const { jamName, numMembers, bandRoles } = req.body;
    const user = req.user;
    await Jam.createJam(jamName, numMembers, bandRoles);
    res.send("Success");
  } catch (error) {
    res.status(400).send(error);
  }
});

// all jams
router.get("/all", auth, async (req, res) => {
  try {
    const jams = await Jam.find();
    res.send(jams);
  } catch (error) {
    res.status(400).send(error);
  }
});

// all jams of user, created and participated
router.get("/user", auth, async (req, res) => {
  try {
    const user = req.user;
    const jam = await Jam.findJamsOfUser(user);
    res.send(jam);
  } catch (error) {
    res.status(400).send(error);
  }
});

// specific jam
router.get("/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const jamName = req.params.jamName;
    const jam = await Jam.findJam(user, jamName);
    res.send(jam);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete jam. only creator can delete
router.delete("/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const jamName = req.params.jamName;
    const jam = await Jam.deleteJam(user, jamName);
    res.send("deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
