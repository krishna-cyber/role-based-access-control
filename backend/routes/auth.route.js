const router = require("express").Router();

router.get("/register", async (req, res, next) => {
  res.send("register");
});

router.post("/register", async (req, res, next) => {
  res.send("register post");
});

router.post("/login", async (req, res, next) => {
  res.send("login post");
});

router.get("/logout", async (req, res, next) => {
  res.send("logout");
});
module.exports = router;
