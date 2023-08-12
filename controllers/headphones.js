const Headphones = require("../models/headphones.js");

// CREATE Headphones
const createHeadphones = async (req, res) => {
  try {
    const {
      title,
      description,
      brand,
      category,
      color,
      price,
      features,
      images,
    } = req.body;
    const newHeadphones = await Headphones.create({
      title,
      description,
      brand,
      category,
      color,
      price,
      features,
      images,
    });
    res.status(201).json(newHeadphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Headphones Detail
const getHeadphonesDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const headphones = await Headphones.findById(id);
    if (!headphones) {
      return res.status(404).json({ message: "Headphones not found" });
    }
    res.status(200).json(headphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Headphones
const updateHeadphones = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHeadphones = await Headphones.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedHeadphones) {
      return res.status(404).json({ message: "Headphones not found" });
    }
    res.status(200).json(updatedHeadphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Headphones
const deleteHeadphones = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHeadphones = await Headphones.findByIdAndRemove(id);
    if (!deletedHeadphones) {
      return res.status(404).json({ message: "Headphones not found" });
    }
    res.status(201).json({ message: "Headphones deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Headphones
const searchHeadphones = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const headphones = await Headphones.find({ title });
    res.status(200).json(headphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHeadphones,
  getHeadphonesDetail,
  updateHeadphones,
  deleteHeadphones,
  searchHeadphones,
};
