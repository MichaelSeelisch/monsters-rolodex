var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Nothing passed in!');
});
app.get(/^\/[0-9]+$/, function (req, res) {
  res.send('Number!');
});
app.get('/*', function (req, res) {
  res.send('Not a number!');
});
app.listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 19_express_path_option.js

// Testing in Terminal:
// $ curl http://127.0.0.1:3000/
// $ curl http://127.0.0.1:3000/123
// $ curl http://127.0.0.1:3000/foo