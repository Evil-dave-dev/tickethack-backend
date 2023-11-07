var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');


router.post('/', (req, res) => {

	if(!req.body.departure || !req.body.arrival /*|| !req.body.datedepart*/) {
    res.json({ result: false, error: 'missing or empty fields'});
    return;
  }

	Trip.find({departure: req.body.departure, arrival: req.body.arrival/*, date: req.body.datedepart*/}).then(data => {
	 
		if (data) {
			res.json({ result: true, trips: data});
		} else {
			res.json({ result: false, error: 'No trip found.'})
		}
	});
});








module.exports = router;