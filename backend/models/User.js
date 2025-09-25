const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  password: { type: String, required: true },
  gender: { type: String },
  location: { type: String },
});

module.exports = mongoose.model("User", userSchema);
