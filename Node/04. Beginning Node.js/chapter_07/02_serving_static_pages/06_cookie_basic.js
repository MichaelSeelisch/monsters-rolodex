var express = require('express');

var app = express()
  .use(function (req, res) {
    res.cookie('cookie_name', 'foo');
    res.end('Hello');
  })
  .listen(3000);

// RUN Server:
// $ node 06_cookie_basic.js

// Run Example:
// $ curl http://127.0.0.1:3000 -i