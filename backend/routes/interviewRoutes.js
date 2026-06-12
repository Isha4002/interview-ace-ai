const express = require("express");
const router = express.Router();

const {
  generateInterview,
} = require("../controller/interviewController");

router.post(
  "/generate",
  generateInterview
);

module.exports = router;