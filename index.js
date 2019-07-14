const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const { dbURI } = require("./config/keys");
const users = require("./routes/users");
// Connect

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log(`Connected to db`))
  .catch(err => console.error(`Connection Error ${err}`));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use("/api/users", users);
// Listen
app.listen(5000, () => console.log(`Listening at port 5000`));
