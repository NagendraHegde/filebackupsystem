
const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("first node js server!!");
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});