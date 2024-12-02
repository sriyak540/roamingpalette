const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const next = require("next");

const PostRoutes = require("./app/api/items/[id]/routes");
const UserRoutes = require("./app/api/users/routes");

dotenv.config();
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

console.log("Environment loaded from .env");
console.log("MONGODB_URI: ", process.env.MONGODB_URI);

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGODB_URI || "", {})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((e) => {
    console.error("Database connection failed", e);
    process.exit(1);
  });

app.prepare().then(() => {
  server.use(express.json());
  server.use(cors());

  server.use("/api/items", PostRoutes);
  server.use("/api/users", UserRoutes);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

})
