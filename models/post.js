const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ["Woman", "Man"]
  }
});

module.exports = mongoose.model('post', PostSchema);
