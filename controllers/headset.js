const Headset = require("../models/headset.js");

// CREATE Headset
const createHeadset = async (req, res) => {
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
    const newHeadset = await Headset.create({
      title,
      description,
      brand,
      category,
      color,
      price,
      features,
      images,
    });
    res.status(201).json(newHeadset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Headset Detail
const getHeadsetDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const headset = await Headset.findById(id);
    if (!headset) {
      return res.status(404).json({ message: "Headset not found" });
    }
    res.status(200).json(headset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Headset
const updateHeadset = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHeadset = await Headset.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedHeadset) {
      return res.status(404).json({ message: "Headset not found" });
    }
    res.status(200).json(updatedHeadset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Headset
const deleteHeadset = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHeadset = await Headset.findByIdAndRemove(id);
    if (!deletedHeadset) {
      return res.status(404).json({ message: "Headset not found" });
    }
    res.status(201).json({ message: "Headset deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Headset
const searchHeadset = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const headsets = await Headset.find({ title });
    res.status(200).json(headsets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHeadset,
  getHeadsetDetail,
  updateHeadset,
  deleteHeadset,
  searchHeadset,
};
