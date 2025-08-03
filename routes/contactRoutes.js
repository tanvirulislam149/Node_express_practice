const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("checking routes");
});

router.get("/check", (req, res) => {
  res.send("checking check");
});

module.exports = router;
