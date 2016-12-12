var connect = require('connect');
var util = require('util');

// A simple logging middleware
function logit(req, res, next) {
  util.log(util.format('Request recieved: %s, %s', req.method, req.url));
  next();
};

connect()
  // Register a middleware
  .use(logit)
  .listen(3000);

console.log('Server running on port 3000');