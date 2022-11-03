var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
var logger = require("morgan");
require("./config/database");

var indexRouter = require("./routes/index");
var doctorsRouter = require("./routes/doctors");
var patientsRouter = require("./routes/patient");
var notesRouter = require("./routes/notes");
var port = process.env.port || 4000;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));
app.use("/", indexRouter);
app.use("/doctors", doctorsRouter);
app.use("/", patientsRouter);
app.use("/", notesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
