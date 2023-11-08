var express = require('express');
var router = express.Router();


const Booking = require('../models/bookings');

router.post('/', (req, res) => {
  
      const newBooking = new Booking({
        departure: data.departure,
        arrival: data.arrival,
      });
      newBooking.save();
      res.json({ result: data});
      
    });
    
  





module.exports = router;