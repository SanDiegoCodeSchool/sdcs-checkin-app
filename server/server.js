const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static('public'));

app.get("/jsmember", function (req, res) {
    res.json(memberlist);
});

app.post("/jscheckin", (req, res) => {
  const member={
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      location: "",
  }
  res.status(200).send(req.body);
});

app.get("*", function (req, res) {
  res.status(404).send("error: page not found");
});
  
  module.exports = app;
