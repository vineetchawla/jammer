const mongoose = require("mongoose");

const schema = mongoose.Schema;

const jamSchema = new schema({
  name: {
    type: "String",
  },
  totalRoles: {
    type: "Number",
  },
  bandRoles: {
    type: "",
  },
});
const Jam = mongoose.model("Jam", jamSchema);

module.exports = {
  Jam,
};
