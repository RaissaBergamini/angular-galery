var express = require("express");
var bodyParser = require("body-parser");
var url = require("url");

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/ping", (req, res, next) => {
  res.json("pong");
});

app.post("/scrap", (req, res) => {
  console.log(req.body);
  var requested_url = req.body.url;
  console.log(requested_url);

  const cheerio = require("cheerio");
  const request = require("request");

  var results = [];

  let imgs = request(
    {
      method: "GET",
      url: requested_url,
    },
    (err, response, body) => {
      if (err) return console.error(err);
      var reqUrl = url.parse(requested_url);

      let $ = cheerio.load(body);

      $("img").each(function (i, image) {
        results.push(url.resolve(reqUrl, $(image).attr("src")));
      });

      console.log(results);
      res.send({ results: results });
    }
  );
});
