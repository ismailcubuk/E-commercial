const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    series: {
      type: Number,
      required: false,
    },
    gb: {
      type: String,
      required: false,
    },
    variant: {
      type :String,
      required:false
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
    memory: {
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

module.exports = mongoose.model("Phone", PhoneSchema);
