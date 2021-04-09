//
// const express = require("express");
// const server = express();
// const port = 9999;
//
// server.get("/", (req, res) => {
//   res.send("first node js server!!");
// });
//
// server.listen(port, function() {
//   console.log(`Server listening on port ${port}`);
// });

const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});