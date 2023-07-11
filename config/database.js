const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect("mongodb+srv://iismailcubuk:Miniwolf123.@cluster0.rjip1pa.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB connnect");
    })
    .catch((err) => {
    //   throw new Error(err.message);
      console.log(err);
    });
};

module.exports = db;
