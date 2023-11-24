var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
var logger = require("morgan");
var app = express();
//const Message = require("./models/message");
const uri =
  "mongodb+srv://bssbrit:123@cluster0.bssqdsh.mongodb.net/miniMessageBoard?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then((result) => {
    app.listen(3000);
    console.log("connect to db");
  })
  .catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var msgRouter = require("./routes/newMsg");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/new", msgRouter);
//app.use("/message/delete", indexRouter);
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

module.exports = app;
