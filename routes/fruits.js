const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

router.get("/", async (req, res) => {
  try {
    const allFruits = await Fruit.find({});
    res.json(allFruits);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching fruits" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneFruit = await Fruit.findById(req.params.id);
    res.json(oneFruit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching fruit" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFruit = await Fruit.create(req.body);
    res.json(newFruit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error post fruit" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedFruit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error update fruit" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
    res.json(deletedFruit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error delete fruit" });
  }
});
module.exports = router;
