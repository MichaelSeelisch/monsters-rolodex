var connect = require('connect');
var bodyParser = require('body-parser')

var app = connect()
  .use(bodyParser.json())
  .use(function(req, res) {
    // ... do stuff to register the user
    res.end('Registered new user: ' + req.body.username + '\n');
  }).listen(3000);

/*
  $ curl -d '{"username":"tobi"}' -H "Content-Type: application/json" http://localhost:3000

  Registered new user: tobi
*/
