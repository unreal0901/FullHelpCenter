var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// In production only specified origins will be accepted.
// app.use(
//   cors({
//     origin: allowedOrigins,
//   })
// );

// Testing
app.use(cors("*"));

require("./routes/index")(app);

module.exports = app;
