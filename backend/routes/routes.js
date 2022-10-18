const router = require("express").Router();
//importing user model
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user.model");
router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
    });
    // generate a signed son web token with the contents of user object and return it in the response
    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({ user, token });
  })(req, res);
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
