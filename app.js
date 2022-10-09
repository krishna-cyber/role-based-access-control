const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(morgan("dev"));
//dot env

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status);
  res.send(err);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`🖥️ on port ${PORT}`);
});
