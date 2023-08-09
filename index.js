const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Post = require('./routes/post.js');
const Phone = require('./routes/phone.js'); // Import the Phone router
const Shoes = require('./routes/shoes.js'); // Import the Shoes router

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Routes
app.use('/posts', Post);
app.use('/phones', Phone); // Use the Phone router for phone-related routes
app.use('/shoes', Shoes); // Use the Phone router for phone-related routes

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Connect to database
db();

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
