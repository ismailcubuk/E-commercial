const Mouse = require("../models/mouse.js");

// CREATE Mouse
const createMouse = async (req, res) => {
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
    const newMouse = await Mouse.create({
      title,
      description,
      brand,
      category,
      color,
      price,
      features,
      images,
    });
    res.status(201).json(newMouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Mouse Detail
const getMouseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const mouse = await Mouse.findById(id);
    if (!mouse) {
      return res.status(404).json({ message: "Mouse not found" });
    }
    res.status(200).json(mouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Mouse
const updateMouse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMouse = await Mouse.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedMouse) {
      return res.status(404).json({ message: "Mouse not found" });
    }
    res.status(200).json(updatedMouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Mouse
const deleteMouse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMouse = await Mouse.findByIdAndRemove(id);
    if (!deletedMouse) {
      return res.status(404).json({ message: "Mouse not found" });
    }
    res.status(201).json({ message: "Mouse deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Mouse
const searchMouse = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const mice = await Mouse.find({ title });
    res.status(200).json(mice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMouse,
  getMouseDetail,
  updateMouse,
  deleteMouse,
  searchMouse,
};
