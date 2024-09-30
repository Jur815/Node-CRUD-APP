const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://jur:UNSCdwXcESBZVEz3@backenddb.cf29a.mongodb.net/Node-APP?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("connection failed!");
  });

// Get request
app.get("/", (req, res) => {
  res.send("Welcome to Node API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
