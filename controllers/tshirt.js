const Tshirt = require("../models/tshirt.js");

// CREATE Tshirt
const createTshirt = async (req, res) => {
  try {
    const {
      title,
      description,
      gender,
      brand,
      category,
      size,
      color,
      price,
      images,
    } = req.body;
    const newTshirt = await Tshirt.create({
      title,
      description,
      gender,
      brand,
      category,
      size,
      color,
      price,
      images,
    });
    res.status(201).json(newTshirt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Tshirt Detail
const getTshirtDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const tshirt = await Tshirt.findById(id);
    if (!tshirt) {
      return res.status(404).json({ message: "Tshirt not found" });
    }
    res.status(200).json(tshirt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Tshirt
const updateTshirt = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTshirt = await Tshirt.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTshirt) {
      return res.status(404).json({ message: "Tshirt not found" });
    }
    res.status(200).json(updatedTshirt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Tshirt
const deleteTshirt = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTshirt = await Tshirt.findByIdAndRemove(id);
    if (!deletedTshirt) {
      return res.status(404).json({ message: "Tshirt not found" });
    }
    res.status(201).json({ message: "Tshirt deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Tshirt
const searchTshirt = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const tshirts = await Tshirt.find({ title });
    res.status(200).json(tshirts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTshirt,
  getTshirtDetail,
  updateTshirt,
  deleteTshirt,
  searchTshirt,
};
