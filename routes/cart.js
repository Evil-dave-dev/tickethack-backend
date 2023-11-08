var express = require("express");
var router = express.Router();

const Cart = require("../models/cart");

router.post("/", (req, res) => {
  const newCart = new Cart({
    departure: req.body.departure,
    arrival: req.body.arrival,
    //date: req.body.datedepart,
    price: req.body.price,
  });
  newCart.save().then((data) => {
    res.json({ result: true, cart: data });
  });
  Cart.find().then((data) => {
    console.log(data);
  });
});

module.exports = router;
