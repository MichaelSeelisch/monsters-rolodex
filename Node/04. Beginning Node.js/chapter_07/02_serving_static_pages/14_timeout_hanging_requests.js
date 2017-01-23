var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use('/api', timeout(5000), function (req, res, next) {
    // Simulate a hanging request by doing nothing
    }, function (error, req, res, next) {
      if (req.timedout) {
        res.statusCode = 500;
        res.end('Request timed out');
      }
      else {
        next(error);
      }
    }
  )
  .listen(3000);

console.log('Server running on port 3000');

/* 
  Notice that you should not use this middleware at the top level (‘/’) 
  since you probably want to stream a few responses that might take longer 
  than what you might think upfront.
*/

// Run Server:
// $ node 14_timeout_hanging_requests.js

// Open in Browser and wait 5 seconds:
// http://localhost:3000/api