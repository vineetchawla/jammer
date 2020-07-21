const mongoose = require("mongoose");

const schema = mongoose.Schema;

const profileSchema = new schema({
  name: {
    type: "String",
  },
  partyMember: {
    type: "Boolean",
  },
  bandRole: {
    type: "String",
  },
  instrument: {
    type: "String",
  },
});
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
