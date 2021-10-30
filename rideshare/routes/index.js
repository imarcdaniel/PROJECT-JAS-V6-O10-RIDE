var express = require("express");
var router = express.Router();

const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "hopp/dashboard",
    failureRedirect: "hopp/dashboard",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "hopp/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/hopp");
  }
);

module.exports = router;
