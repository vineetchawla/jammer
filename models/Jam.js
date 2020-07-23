const mongoose = require("mongoose");

const schema = mongoose.Schema;

const jamSchema = new schema({
  name: {
    type: "String",
  },
  totalMembers: {
    type: "Number",
  },
  creator: {
    type: "String",
  },
  active: {
    type: "Boolean",
    default: false,
  },
});
const Jam = mongoose.model("Jam", jamSchema);

module.exports = {
  Jam,
};
