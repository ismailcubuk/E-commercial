const Shoes = require("../models/shoes.js"); 

// CREATE Shoes
const createShoes = async (req, res) => {
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
    const newShoes = await Shoes.create({
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
    res.status(201).json(newShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Shoes Detail
const getShoesDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const shoes = await Shoes.findById(id);
    if (!shoes) {
      return res.status(404).json({ message: "Shoes not found" });
    }
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Shoes
const updateShoes = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedShoes = await Shoes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedShoes) {
      return res.status(404).json({ message: "Shoes not found" });
    }
    res.status(200).json(updatedShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Shoes
const deleteShoes = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedShoes = await Shoes.findByIdAndRemove(id);
    if (!deletedShoes) {
      return res.status(404).json({ message: "Shoes not found" });
    }
    res.status(201).json({ message: "Shoes deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Shoes
const searchShoes = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const shoes = await Shoes.find({ title });
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShoes,
  getShoesDetail,
  updateShoes,
  deleteShoes,
  searchShoes,
};
