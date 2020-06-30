const mongoose = require("mongoose");

const userSchema = {
  // Required fields
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

module.exports = mongoose.model("User", userSchema);
