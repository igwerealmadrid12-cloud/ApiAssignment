const express = require("express");
const router = express.Router();

const { orders, cart } = require("../data");

router.get("/", (req, res) => {
  res.json(orders);
});

router.post("/", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price, 0)
  };

  orders.push(newOrder);

  cart.length = 0;

  res.status(201).json({
    message: "Order placed",
    order: newOrder
  });
});

module.exports = router;