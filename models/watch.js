const mongoose = require("mongoose");

const WatchSchema = new mongoose.Schema({
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
  screen: {
    type: Object,
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

module.exports = mongoose.model("Watch", WatchSchema);
