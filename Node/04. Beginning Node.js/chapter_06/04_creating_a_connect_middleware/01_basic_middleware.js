var connect = require('connect');

// Create a connect dispatcher and register with http
var app = connect()
  // Register a middleware
  .use(function(req, res, next) {
    next();
  })
  .listen(3000);

console.log('Server running on port 3000');