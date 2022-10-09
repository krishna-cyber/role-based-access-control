const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
let ejs = require("ejs");
const app = express();

app.use(morgan("dev"));
//dot env
app.set("view engine", ejs);
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

//using index.route
app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));

app.listen(PORT, () => {
  console.log(`🖥️ on port ${PORT}`);
});
