var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser())
  .use(function (req, res) {
    if (req.cookies.name) {
      console.log('User name: ', req.cookies.name);
    }
    else {
      res.cookie('name', 'foo');
    }
    res.end('Hello');
  })
  .listen(3000);

// Run Server:
// $ node 08_cookie_parser.js

// Open in Browser and look and server console:
// http://localhost:3000/

// Maybe run:
// $ curl http://127.0.0.1:3000 -i 