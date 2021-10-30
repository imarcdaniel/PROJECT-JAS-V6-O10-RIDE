var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var logger = require("morgan");
var methodOverride = require("method-override");

var carpoolRouter = require("./routes/carpoolRoutes");
var usersRouter = require("./routes/users");
var indexRouter = require("./routes/index");

require("dotenv").config();

var app = express();
// connect to the MongoDB with mongoose
require("./config/database");
// configure Passport
require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "SEIRocks!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", carpoolRouter);

// app.use("/dashboard", carpoolRouter);
// app.use("/login", carpoolRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
