const mongoose = require("mongoose");

const schema = mongoose.Schema;

const skillSchema = new schema({
  instruments: [
    {
      type: "String",
      require: true,
    },
  ],
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
});
const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
