const router = require("express").Router();
//importing user model
const User = require("../models/user.model");
router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/login", (req, res) => {
  res.send("Login successful!");
});

router.post("/register", (req, res) => {
  //checking the user is already in the database
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(400).json({ message: "User already exists" });

    //if not, create user in our db
    const { email } = req.body;
    const { password } = req.body;
    const newUser = new User({
      email,
      password,
    });
    newUser
      .save()
      .then((user) => {
        console.log("user created successfully");
        res.json({ message: "User created successfully" });
      })
      .catch((err) => res.status(400).json({ message: "Error creating user" }));
  });
});
router.get("/logout", (req, res) => {
  res.send("Logout successful!");
});

module.exports = router;
