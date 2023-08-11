const Tracksuit = require("../models/tracksuit.js"); // Make sure to adjust the path accordingly

// CREATE Tracksuit
const createTracksuit = async (req, res) => {
  try {
    const {
      title,
      description,
      brand,
      category,
      color,
      size,
      price,
      features,
      images,
    } = req.body;
    const newTracksuit = await Tracksuit.create({
      title,
      description,
      brand,
      category,
      color,
      size,
      price,
      features,
      images,
    });
    res.status(201).json(newTracksuit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Tracksuit Detail
const getTracksuitDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const tracksuit = await Tracksuit.findById(id);
    if (!tracksuit) {
      return res.status(404).json({ message: "Tracksuit not found" });
    }
    res.status(200).json(tracksuit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Tracksuit
const updateTracksuit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTracksuit = await Tracksuit.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTracksuit) {
      return res.status(404).json({ message: "Tracksuit not found" });
    }
    res.status(200).json(updatedTracksuit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Tracksuit
const deleteTracksuit = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTracksuit = await Tracksuit.findByIdAndRemove(id);
    if (!deletedTracksuit) {
      return res.status(404).json({ message: "Tracksuit not found" });
    }
    res.status(201).json({ message: "Tracksuit deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Tracksuit
const searchTracksuit = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const tracksuits = await Tracksuit.find({ title });
    res.status(200).json(tracksuits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTracksuit,
  getTracksuitDetail,
  updateTracksuit,
  deleteTracksuit,
  searchTracksuit,
};
