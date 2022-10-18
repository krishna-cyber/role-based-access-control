const express = require("express");
const app = express();
require("./utils/passport.auth");
const cors = require("cors");
const routes = require("./routes/routes");
var createError = require("http-errors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/dbconnection"); //Database connection file

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
//error handling middleware

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
