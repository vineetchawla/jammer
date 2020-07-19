const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bandRolesSchema = new schema({
  name: {
    type: "String",
  },
  instrument: {
    type: "String",
  },
});
const BandRole = mongoose.model("BandRole", bandRolesSchema);

module.exports = {
  BandRole,
};
