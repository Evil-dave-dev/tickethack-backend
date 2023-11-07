var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

router.get('/', (req, res) => {
	Trip.find().then(data => {
		let result;
		for (let i = 0; i < data.length; i++) {
			if(req.body.departure === data[i].departure && req.body.arrival === data[i].arrival) {
				result += data[i];
			} else {
			result = false
		}}
		res.json({ trips: result });
	});
});



module.exports = router;