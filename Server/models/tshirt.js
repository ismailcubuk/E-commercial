const mongoose = require("mongoose");

const TshirtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  size: {
    type: Array,
    required: true,
  },
  color: {
    type: Array,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Tshirt", TshirtSchema);
