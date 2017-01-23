var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use('/api', timeout(1000), function (req, res, next) {
    // Simulate database action that takes 2s
    setTimeout(function () {
      next();
    }, 2000)
  })
  .use(haltOnTimeOut)
  .use(function (req, res, next) {
    res.end('Done!') // Will never get called
  })
  .listen(3000);

console.log('Server running on port 3000');

function haltOnTimeOut(req, res, next) {
  if (!req.timedout) {
    next();
  }
}

/* 
  Notice that you should not use this middleware at the top level (‘/’) 
  since you probably want to stream a few responses that might take longer 
  than what you might think upfront.
*/

// Run Server:
// $ node 15_better_timeout_handling.js

// Open in Browser and wait 5 seconds:
// http://localhost:3000/api