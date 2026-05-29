const express = require("express");
const router = express.Router();

const { cart, products } = require("../data");

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/", (req, res) => {
  const product = products.find(
    p => p.id === req.body.productId
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  cart.push(product);

  res.json({
    message: "Product added to cart",
    cart
  });
});

module.exports = router;