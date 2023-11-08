var express = require("express");
var router = express.Router();

const Cart = require("../models/carts");

router.delete("/deleteAll", (req, res) => {
  Cart.deleteMany().then(() => {
    res.json("Cart cleared!");
  });
});

router.delete("/deleteOne/:id", (req, res) => {
  Cart.deleteOne({ _id: req.params.id }).then((data) => {
    res.json("Trip sup!");
  });
});

router.get("/", (req, res) => {
  Cart.find().then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  Cart.find().then((data) => {
    if (data.length !== 0) {
      res.json({ result: true, tripsLength: data.length, trips: data });
    } else {
      res.json({ result: false, error: "no trip found" });
    }
  });
});

router.post("/newCart", (req, res) => {
  const newCart = new Cart({
    departure: req.body.departure,
    arrival: req.body.arrival,
    // date: req.body.date,
    price: req.body.price,
  });
  newCart.save().then(() => {
		res.json('trip ajouté à cart')
	});
});






module.exports = router;
