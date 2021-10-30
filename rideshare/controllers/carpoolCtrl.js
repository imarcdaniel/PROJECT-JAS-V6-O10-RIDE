const carpool = require("../models/rideshare-db.js");

const User = require("../models/user.js");

const Journey = require("../models/journey.js");

const UserModel = require("../models/user.js");

function index(req, res) {
  let UserDataFromDB = req.user;
  res.render("hopp/allmyride.ejs", { ridesOfUser: UserDataFromDB.rides });
}

function addRide(req, res, next) {
  console.log("form data", req.body);
  console.log("person logged", req.user);
  req.user.rides.push({
    fromAddress: req.body.originAdd,
    toAddress: req.body.destinationAdd,
    departs: req.body.leaveDate,
    return: req.body.returnDate,
  });
  req.user.save(function (err) {
    res.redirect("/hopp/dashboard");
  });
}

function delRide(req, res, next) {
  User.findOne({ "rides._id": req.params.id }, function (err, user) {
    user.rides.id(req.params.id).remove();
    user.save(function (err) {
      res.redirect("/hopp/dashboard");
    });
  });
}

function show(req, res) {
  console.log("reqparamsid", req.params.id);
  User.findOne({ "rides._id": req.params.id }, function (err, user) {
    let ride = user.rides.id(req.params.id);
    console.log("Ride b4 it passes the render", ride);

    res.render("hopp/ridedetails.ejs", { title: "Ride Detail", ride });
  });
}

function addJourney(req, res, next) {
  console.log("form data", req.body);
  console.log("person logged", req.user);
  carpool.push({
    googleId: req.user.id,
    name: req.user.name,
  });
  carpool.ridez.push({
    fromAddress: req.body.originAdd,
    toAddress: req.body.destinationAdd,
    departs: req.body.leaveDate,
    return: req.body.returnDate,
  });

  carpool.save(function (err) {
    res.redirect("/hopp/dashboard");
  });
}

function allJourney(req, res) {
  const cursor = db.collection("carpool").find({ _id: {} });
  res.render("hopp/availablerides.ejs", { cursor: cursor });
}

module.exports = {
  addRide,
  delRide,
  index,
  show,
  addJourney,
  allJourney,
};
