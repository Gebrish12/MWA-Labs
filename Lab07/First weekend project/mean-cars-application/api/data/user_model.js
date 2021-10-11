const mongoose = require("mongoose");

const userModelSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

mongoose.model("User", userModelSchema, "users");
