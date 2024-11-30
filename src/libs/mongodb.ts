const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      userNewUserUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection failed:", e);
    process.exit(1);
  }
};

module.exports = connectDB;