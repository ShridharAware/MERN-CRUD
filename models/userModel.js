const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  company: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
