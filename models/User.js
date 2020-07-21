const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: "Boolean",
  },
  email: {
    type: "String",
  },
  password: {
    type: "String",
  },
});
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
