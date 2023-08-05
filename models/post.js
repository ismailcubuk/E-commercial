const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category:{
    type:String,
    default:'none'
  },
  brand:{
    type:String,
    default:"none"
  },
  stock:{
    type: Number,
  },
  category: {
    type: String,
    required: true,
    enum: ["Tshirt", "Trousers", "Shoes", "Phone", "Watch","Earphones", "Mouse", "Keyboard", "Headphones"]
  }
});

module.exports = mongoose.model('post', PostSchema);
