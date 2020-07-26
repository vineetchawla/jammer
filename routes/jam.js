//create jam, requires userid, N number of members, and N Bandroles

const express = require("express");

const Jam = require("./../models/Jam");
const auth = require("./../middleware/auth");

const router = express.Router();

router.post("/create", auth, async (req, res) => {
  try {
    const jam = req.body;
    jam.creator = req.user.id;
    jam.usersAccepted = [req.user.id];

    await Jam.create(jam);
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

// all jams of a user, created or participated
router.get("/user", auth, async (req, res) => {
  try {
    const user = req.user;
    const created = await Jam.find({ creator: user.id });
    const partricipated = await Jam.find({
      usersAccepted: { $all: [user.id] },
    });
    res.send({ created, partricipated });
  } catch (error) {
    res.status(400).send(error);
  }
});

// specific jam
router.get("/find/:jamName", auth, async (req, res) => {
  try {
    const jamName = req.params.jamName;
    const jam = await Jam.findOne({ name: jamName });
    res.send(jam);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete jam. only creator can delete
router.delete("/:jamName", auth, async (req, res) => {
  try {
    const jamName = req.params.jamName;
    // assert req.user.id = jam.creator
    await Jam.deleteOne({ name: jamName });
    res.send("deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
