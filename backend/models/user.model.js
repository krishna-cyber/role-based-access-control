const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//hashing password before saving to database

userSchema.pre("save", async function (next) {
  console.log("just before saving");
  try {
    const rounds = 10; // What you want number for round paasword

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
