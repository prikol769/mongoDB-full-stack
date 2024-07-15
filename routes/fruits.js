const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

router.get("/", (req, res) => {
  Fruit.find({}, (err, allFruits) => {
    res.render("Index", {
      fruits: allFruits,
    });
  });
});

module.exports = router;
