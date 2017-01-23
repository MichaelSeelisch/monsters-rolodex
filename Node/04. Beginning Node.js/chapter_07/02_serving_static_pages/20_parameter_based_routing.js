var express = require('express');

var app = express();
app.get('/user/:userId', function (req, res) {
  res.send('userId is: ' + req.params['userId']);
});
app.listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 20_parameter_based_routing.js

// Testing in Terminal:
// $ curl http://127.0.0.1:3000/user/123