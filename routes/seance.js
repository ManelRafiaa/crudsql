
const express = require("express");
const router = express.Router();
const { createSeance, findAbsentBySeance } = require("../controllers/seanceController");

router.post("/", createSeance);
router.get("/:seanceId", findAbsentBySeance);


module.exports = router;