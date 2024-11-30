
const bodyParser = require("body-parser");
const connectDB = require("./db"); // MongoDB connection file
const postRoutes = require("./routes/posts"); // Post-related routes

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Home from "./app/page"

import Routes from "./app/api/items/[id]/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (Req, res) => {
    res.send(Home);
})

connectDB();

app.use("/api/items", Routes);

console.log("Mongodb_uri from .env", process.env.MONGODB_URI);

mogoose 
    .connect(process.env.MONGODB_URI || "")
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    })
    .catch((e) => console.error("Database connection failed", e));