var express = require('express');

var app = express();
app.param('userId', function (req, res, next, userId) {
  res.write('Looking up user: ' + userId + '\n');
  // Simulate a user lookup and load it into the request object for later middleware
  req.user = { userId: userId };
  next();
});
app.get('/user/:userId', function (req, res) {
  res.end('User is: ' + JSON.stringify(req.user));
});
app.listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 21_better_parameter_based_routing.js

// Testing in Terminal:
// $ curl http://127.0.0.1:3000/user/123