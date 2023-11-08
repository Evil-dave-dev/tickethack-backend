var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');


router.delete('/deleteAll', (req, res) => {
	
		Cart.deleteMany().then(() => {
			res.json('Cart cleared!');
		}
	)
		})
	;


router.delete('/deleteOne/:id', (req, res) => {
	
		Cart.deleteOne({_id: req.params.id}).then(data => {
			res.json('Trip sup!');
		}
	)
		})
	;

	


   
  
          
		





module.exports = router;