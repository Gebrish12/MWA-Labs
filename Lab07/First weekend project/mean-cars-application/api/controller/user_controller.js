const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = mongoose.model("User");

module.exports.adduser = function (req, res) {
  console.log("controller register:");
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (!err) {
      const newUser = {
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
      };

      User.create(newUser, function (err, user) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(201).json(user);
        }
      });
    }
  });
};
