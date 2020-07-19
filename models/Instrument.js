const mongoose = require("mongoose");

const schema = mongoose.Schema;

const instrumentSchema = new schema({
  involvesWatchonly: {
    type: "Boolean",
  },
});
const Instrument = mongoose.model("Instrument", instrumentSchema);

module.exports = {
  Instrument,
};
