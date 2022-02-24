const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = Math.round(weight / (height*height));
  res.send("The result is " + result);
});

app.listen(3000, function () {
  console.log("Listening on 3000");
});
