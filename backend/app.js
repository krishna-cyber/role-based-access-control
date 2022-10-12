const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
var createError = require("http-errors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/dbconnection"); //Database connection file

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.all("*", (req, res) => {
  res.json(createError(454, "Page not found"));
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
