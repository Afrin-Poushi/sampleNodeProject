const express = require("express");
const app = express();
var path = require("path");

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log("Listening on port 8000...");
});
