const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
var createError = require("http-errors");

app.use(cors());
require("dotenv").config();

app.use(routes);

app.all("*", (req, res) => {
  res.json(createError(454, "Page not found"));
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
