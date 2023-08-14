const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");
const Phone = require("./routes/phone.js"); // Import the Phone router
const Shoes = require("./routes/shoes.js"); // Import the Shoes router
const Tshirt = require("./routes/tshirt.js"); // Import the Tshirt router
const Tracksuit = require("./routes/tracksuit.js"); // Import the Tracksuit router
const Headset = require("./routes/headset.js"); // Import the Headset router
const Headphones = require("./routes/headphones.js"); // Import the Headphones router
const Keyboard = require("./routes/keyboard.js"); // Import the Keyboard router
const Mouse = require("./routes/mouse.js"); // Import the Mouse router
const Watch = require("./routes/watch.js"); // Import the Watch router

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/phones", Phone); // Use the Phone router
app.use("/shoes", Shoes); // Use the Shoes router
app.use("/tshirt", Tshirt); // Use the Tshirt router
app.use("/tracksuit", Tracksuit); // Use the Tracksuit router
app.use("/headset", Headset); // Use the Headset router
app.use("/headphones", Headphones); // Use the Headphones router
app.use("/keyboard", Keyboard); // Use the Keyboard router
app.use("/mouse", Mouse); // Use the Mouse router
app.use("/watch", Watch); // Use the Watch router

// Default route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Connect to database
db();

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
