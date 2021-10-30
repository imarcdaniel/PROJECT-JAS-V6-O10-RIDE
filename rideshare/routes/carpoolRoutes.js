var express = require("express");
var router = express.Router();
const carpoolCtrl = require("../controllers/carpoolCtrl.js");

/* GET home page. */

router.get("/hopp/dashboard", isLoggedIn, function (req, res) {
  res.render("hopp/dashboard.ejs");
});

router.get("/", function (req, res) {
  res.render("landing.ejs");
});

router.get("/hopp/login", function (req, res) {
  res.render("hopp/login");
});
router.get("/hopp/destination", isLoggedIn, function (req, res) {
  res.render("hopp/destination.ejs");
});

router.post("/hopp/destination/delete/:id", isLoggedIn, carpoolCtrl.delRide);

router.post("/hopp/destination/new", isLoggedIn, carpoolCtrl.addRide);

router.get("/hopp/allmyrides", isLoggedIn, carpoolCtrl.index);
router.get("/hopp/allmyrides/:id", isLoggedIn, carpoolCtrl.show);

router.post("/hopp/availablerides/new", isLoggedIn, carpoolCtrl.addJourney);
router.get("/hopp/availablerides", isLoggedIn, carpoolCtrl.allJourney);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
