require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/router.js");

const app = express();
const port = process.env.PORT || 2000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan logger middleware
app.use(morgan('combined'));

// Database connection
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log("Server running on port: " + port);
  });
});

// Set base API route
app.use("/api", router);

process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection closed through app termination");
    process.exit(0);
  });
}).on("SIGTERM", () => {
  db.close(() => {
    console.log("Mongoose connection closed through app termination");
    process.exit(0);
  });
});
