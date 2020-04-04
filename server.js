const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://Budgetuser:password1@ds145168.mlab.com:45168/heroku_c5p442lx";

mongoose.connect(process.env.MONGODB_URI || "mongodb://Budgetuser:password1@ds145168.mlab.com:45168/heroku_c5p442lx", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});