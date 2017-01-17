var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser())
  .use('/toggle', function (req, res) {
    if (req.cookies.name) {
      res.clearCookie('name');
      res.end('name cookie cleared! Was: ' + req.cookies.name);
    }
    else {
      res.cookie('name', 'foo');
      res.end('name cookie set!');
    }
  })
  .listen(3000);

// Run Server:
// $ node 09_clear_cookie.js

// Open in Browser and look and server console:
// http://localhost:3000/toggle