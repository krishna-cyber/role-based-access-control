const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const createHttpError = require("http-errors");

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
    const rounds = 10; // What you want number for round password

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

//compare password
userSchema.methods.matchPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw createHttpError.InternalServerError();
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
