const mongoose = require("mongoose");

const HeadsetSchema = new mongoose.Schema(
  {
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
  },
  { versionKey: false }
);

module.exports = mongoose.model("Headset", HeadsetSchema);
