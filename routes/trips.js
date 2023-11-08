var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");

router.post("/", (req, res) => {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    // date: req.body.date,
  }).then((data) => {
    if (data.length !== 0) {
      res.json({ result: true, trips: data });
    } else {
      res.json({ result: false, error: "No trip found." });
    }
  });
});




module.exports = router;
