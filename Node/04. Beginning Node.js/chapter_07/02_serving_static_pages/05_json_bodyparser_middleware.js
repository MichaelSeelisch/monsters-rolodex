var express = require('express');
var bodyParser = require('body-parser');

var app = express()
  .use(bodyParser.json())
  .use(function (req, res) {
    if (req.body.foo) {
      res.end('Body parsed! Value of foo: ' + req.body.foo);
    }
    else {
      res.end('Body does not have foo!');
    }
  })
  .use(function (err, req, res, next) {
    res.end('Invalid body!');
  })
  .listen(3000);

// Run Server:
// $ node 05_json_bodyparser_middleware

// RUN for valid body:
// $ curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123}"

// RUN for invalid body:
// $ curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123,}"