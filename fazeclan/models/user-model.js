const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  githubId: String,
  profileImageUrl: String,
  badges: []
});

// "on-fire": false
// commit three days in a row, flip to true

const User = mongoose.model("user", userSchema);

module.exports = User;

// "on-fire": false
// commit three days in a row, flip to true
