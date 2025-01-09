const express = require("express");
const path = require("path");
const app = express();
const PORT = 8008;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.redirect("/index.html")
});

app.listen(8008);

console.log("Running on port " + PORT);



