const mongoose = require("mongoose");

const schema = mongoose.Schema;

const profileSchema = new schema({
  instrument: {
    type: "String",
  },
});
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
