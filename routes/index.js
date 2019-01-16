var express = require("express");
var router = express.Router();
const Vaping = require("../models/Vaping");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const data = await Vaping.find();
  res.send(data);
});

router.post("/", async (req, res) => {
  const data = req.body;
  const vaping = new Vaping(data);

  try {
    await vaping.save();
    res.send("saved");
  } catch (ex) {
    res.send("Something went wrong");
  }
});

module.exports = router;
