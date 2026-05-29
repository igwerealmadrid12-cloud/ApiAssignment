const express = require("express");
const router = express.Router();

const { users } = require("../data");

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

module.exports = router;