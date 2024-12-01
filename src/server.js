const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const Routes = require("./app/api/items/[id]/routes");

dotenv.config();

console.log("Environment loaded from .env");
console.log("MONGODB_URI: ", process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
console.log("Express JSON middleware added");

// Test route
app.get("/", (req, res) => {
  console.log("Root route hit");  
  res.send("Hello, world!");
});

// Log when the server starts listening
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

// MongoDB connection test with added logging for the process
mongoose
  .connect(process.env.MONGODB_URI || "", {})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((e) => {
    console.error("Database connection failed", e);
    process.exit(1);
  });

app.use("/api/items", Routes);
app.use(cors({ origin: 'http://localhost:3000' }));
console.log("Routes mounted: /api/items");
