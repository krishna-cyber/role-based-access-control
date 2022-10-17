const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "Email not registered." });
      } else {
        const match = await User.matchPassword(password);
        match
          ? done(null, user, { message: "Login successfully" })
          : done(null, false, { message: "Incorrect password." });
      }
    }
  )
);
