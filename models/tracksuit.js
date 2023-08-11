const mongoose = require("mongoose");

const TracksuitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
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
  color: {
    type: Array,
    required: true,
  },
  size: {  // Adjusted property for tracksuits
    type: String,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  features: {
    type: Object,
    required: false,
  },
  images: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Tracksuit", TracksuitSchema);
