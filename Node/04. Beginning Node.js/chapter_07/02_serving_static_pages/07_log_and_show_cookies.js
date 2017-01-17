var express = require('express');

var app = express()
  .use(function (req, res) {
    console.log('---client request cookies header:\n', req.headers['cookie']);
    res.cookie('cookieName', 'foo');
    res.end('Hello');
  })
  .listen(3000);

// Run Server:
// $ node 07_log_and_show_cookies.js

// Open in Browser and look and server console:
// http://localhost:3000/