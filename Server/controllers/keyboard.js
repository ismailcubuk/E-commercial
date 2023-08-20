const Keyboard = require("../models/keyboard.js");

// CREATE Keyboard
const createKeyboard = async (req, res) => {
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
    const newKeyboard = await Keyboard.create({
      title,
      description,
      brand,
      category,
      color,
      price,
      features,
      images,
    });
    res.status(201).json(newKeyboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Keyboard Detail
const getKeyboardDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const keyboard = await Keyboard.findById(id);
    if (!keyboard) {
      return res.status(404).json({ message: "Keyboard not found" });
    }
    res.status(200).json(keyboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Keyboard
const updateKeyboard = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedKeyboard = await Keyboard.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedKeyboard) {
      return res.status(404).json({ message: "Keyboard not found" });
    }
    res.status(200).json(updatedKeyboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Keyboard
const deleteKeyboard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedKeyboard = await Keyboard.findByIdAndRemove(id);
    if (!deletedKeyboard) {
      return res.status(404).json({ message: "Keyboard not found" });
    }
    res.status(201).json({ message: "Keyboard deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Keyboard
const searchKeyboard = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const keyboards = await Keyboard.find({ title });
    res.status(200).json(keyboards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createKeyboard,
  getKeyboardDetail,
  updateKeyboard,
  deleteKeyboard,
  searchKeyboard,
};
