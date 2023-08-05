const Phone = require("../models/phone.js");

// CREATE Phone
const createPhone = async (req, res) => {
  try {
    const {
      title,
      description,
      brand,
      category,
      color,
      memory,
      price,
      features,
      images,
    } = req.body;
    const newPhone = await Phone.create({
      title,
      description,
      brand,
      category,
      color,
      memory,
      price,
      features,
      images,
    });
    res.status(201).json(newPhone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Phone Detail
const getPhoneDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const phone = await Phone.findById(id);
    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Phone
const updatePhone = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPhone = await Phone.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPhone) {
      return res.status(404).json({ message: "Phone not found" });
    }
    res.status(200).json(updatedPhone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Phone
const deletePhone = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPhone = await Phone.findByIdAndRemove(id);
    if (!deletedPhone) {
      return res.status(404).json({ message: "Phone not found" });
    }
    res.status(201).json({ message: "Phone deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH Phone
const searchPhone = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const phones = await Phone.find({ title });
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPhone,
  getPhoneDetail,
  updatePhone,
  deletePhone,
  searchPhone,
};
