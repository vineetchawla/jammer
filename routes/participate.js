const express = require("express");
const Jam = require("./../models/Jam");

const auth = require("./../middleware/auth");

const router = express.Router();

//select a jam with profile
router.put("/", auth, async (req, res) => {
  try {
    const user = req.user;
    const { jamName, profile } = req.body;

    await addUserToJam(jamName, profile);
    res.send("done");
  } catch (error) {}
});

// remove user from jam
router.get("/remove/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const { jamName } = req.param.jamName;
    await removeUserFromJam(user, jamName);
  } catch (err) {}
});

router.get("/start/:jamName", auth, async (req, res) => {
  try {
    const user = req.user;
    const { jamName } = req.param.jamName;
    await startJam(user, jamName);
  } catch (err) {}
});
