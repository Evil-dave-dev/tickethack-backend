var express = require('express');
var router = express.Router();

const Cart = require('../models/cart');

router.post('/', (req, res) => {
			
       
    
            const newCart = new Cart({
              departure: req.body.departure,
              arrival: req.body.arrival,
              //date: req.body.datedepart,
            });
            newCart.save().then(data => {
              res.json({ result: true, cart: data });
            });
          
        
  
					
					
				});
		





module.exports = router;