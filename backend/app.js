const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors());
require("dotenv").config();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
