const mongoose = require("mongoose");

const jamSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true,
  },
  totalMembers: {
    type: "Number",
    requires: "true",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  active: {
    type: "Boolean",
    default: false,
  },
  instruments: [
    {
      type: "String",
    },
  ],
  filledRole: [
    {
      type: "String",
    },
  ],
  usersAccepted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const Jam = mongoose.model("Jam", jamSchema);

module.exports = Jam;
