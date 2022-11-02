const express = require("express");
const app = express();

const cors = require("cors");
const routes = require("./routes/routes");
var createError = require("http-errors");
const mongoose = require("mongoose");
const { auth } = require("express-openid-connect");
require("dotenv").config();
require("./models/dbconnection"); //Database connection file

//Middleware
app.use(cors());
// index.js

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
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
