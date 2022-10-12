const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/login", (req, res) => {
  res.send("Login successful!");
});

router.post("/register", (req, res) => {
  res.send("Registration successful!");
});

router.get("/logout", (req, res) => {
  res.send("Logout successful!");
});

module.exports = router;
