const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Good morning!");
});

router.post("/login", (req, res) => {
  res.send("Login successful!");
});

router.post("/register", (req, res) => {
  res.send("Registration successful!");
});

module.exports = router;