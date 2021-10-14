const express = require("express");
const path = require("path");
require("./api/data/db");
const route = require("./api/route");
const app = express();
app.use("/api", function (req, res, next) {
  res.header("Access-Control-Allow-origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-header",
    "Origin,X-Requested-with, content-Type,Accept"
  );
  next();
});
app.set("port", 3000);
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api", route);

const server = app.listen(app.get("port"), function () {
  console.log("server has started at ", server.address().port);
});
