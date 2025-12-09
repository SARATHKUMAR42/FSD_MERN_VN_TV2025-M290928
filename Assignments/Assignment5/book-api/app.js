const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./Routes/bookRoutes");
const logger = require("./Middleware/logger");

const app = express();
const PORT = 8000;

// middleware
app.use(express.json());
app.use(logger);

// routes
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Book API");
});

// connect + run
async function start() {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookDB");
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}

start();
