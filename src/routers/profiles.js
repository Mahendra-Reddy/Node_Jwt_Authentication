const express = require("express");
const Profile = require("../models/profile");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.post("/profiles", auth, async (req, res) => {
  try {
    const profile = new Profile({ ...req.body, owner: req.user._id });
    await profile.save(profile);
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/profiles", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ owner: req.user._id });
    await profile.populate("owner").execPopulate();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/profiles", auth, async (req, res) => {
  try {
    const profile = await Profile.deleteMany({ owner: req.user._id });
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
