var express = require("express");
var router = express.Router();

const Booking = require("../models/bookings");

router.post("/", (req, res) => {
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    // date: req.body.date,
    price: req.body.price,
  });
  newBooking.save().then(() => {
    Booking.find().then((data) => {
      if (data.length !== 0) {
        res.json(data);
      } else {
        res.json({ result: false, error: "no trip found" });
      }
    });
  });
});

module.exports = router;
