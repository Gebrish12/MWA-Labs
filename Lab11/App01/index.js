var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    //  var filename = "." + q.pathname;
    var data = q.query;
    if (data.page == 1) {
      fs.readFile("page1.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    if (data.page == 2) {
      fs.readFile("page2.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    if (data.page == 3) {
      fs.readFile("page3.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
