const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  console.log("Welcome to my server");
  res.send("Welcome to my server");
});

app.listen(8080);
