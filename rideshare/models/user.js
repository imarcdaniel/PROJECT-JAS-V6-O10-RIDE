var mongoose = require("mongoose");
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
var UserSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
    email: String,
    avatar: String,
    rides: [RideSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
