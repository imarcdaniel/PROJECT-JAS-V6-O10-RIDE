const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rideshare = new Schema({
  googleId: String,
  name: String,
  ridez: [{ type: Schema.Types.ObjectId, ref: "journey" }],
});

module.exports = mongoose.model("carpool", rideshare);
