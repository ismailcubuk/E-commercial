const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
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
  category:{
    type :String,
  },
  color:{
    type : Array,
    required: true,
  },
  memory:{
    type :Array,
    required:true
  },
  price:{
    type :Object,
    required:true
  },
  features:{
    type:Object,
    required:false
  },
  images:{
    type:Array,
    required:true
  },
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Phone', PhoneSchema);
