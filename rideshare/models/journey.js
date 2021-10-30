const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RideSchema = new mongoose.Schema(
  {
    rideType: String,
    fromAddress: String,
    toAddress: String,
    departs: Date,
    return: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("journey", RideSchema);
