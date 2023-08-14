const Watch = require("../models/watch.js");

// CREATE Watch
const createWatch = async (req, res) => {
  try {
    const {
      title,
      description,
      brand,
      category,
      color,
      screen,
      price,
      features,
      images,
    } = req.body;
    const newWatch = await Watch.create({
      title,
      description,
      brand,
      category,
      color,
      screen,
      price,
      features,
      images,
    });
    res.status(201).json(newWatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Watch Detail
const getWatchDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const watch = await Watch.findById(id);
    if (!watch) {
      return res.status(404).json({ message: "Watch not found" });
    }
    res.status(200).json(watch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Watch
const updateWatch = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWatch = await Watch.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }
    res.status(200).json(updatedWatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Watch
const deleteWatch = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWatch = await Watch.findByIdAndRemove(id);
    if (!deletedWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }
    res.status(201).json({ message: "Watch deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Watch
const searchWatch = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const watches = await Watch.find({ title });
    res.status(200).json(watches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWatch,
  getWatchDetail,
  updateWatch,
  deleteWatch,
  searchWatch,
};
