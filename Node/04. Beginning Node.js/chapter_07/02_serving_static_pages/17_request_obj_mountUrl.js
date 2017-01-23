var express = require('express');

var app = express()
  .use('/home', function (req, res, next) {
    console.log('first:', req.url); // GET /home => "first: /"
    next();
  })
  .use(function (req, res, next) {
    console.log('second:', req.url); // GET /home => "second: /home"
  next();
  })
  .listen(3000);

console.log('Server running on port 3000');

/*
  When your middleware is mounted, Express tries to make it easier for you 
  to access only the relevant portion of the req.url. 
  For example, if you mount your middleware at '/api', 
  for the request ‘/api/admin’, req.url will only be '/admin'.
*/

// Run Server:
// $ node 17_request_obj_mountUrl.js

// Open in Browser and wait 5 seconds:
// http://localhost:3000/api