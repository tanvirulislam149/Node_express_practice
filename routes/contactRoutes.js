const express = require("express");
const router = express.Router();
const { getContact, postContact } = require("../controllers/contactController");

// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

router.route("/").get(getContact).post(postContact);

module.exports = router;
