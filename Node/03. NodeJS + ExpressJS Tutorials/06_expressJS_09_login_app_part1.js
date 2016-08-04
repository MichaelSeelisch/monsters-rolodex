var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.get('/', function(req, resp) {
  resp.sendFile('./files/index.html', {root: __dirname});
});

app.post('/', function(req, resp)) {
  resp.end(JSON.stringify(req.body));
});

app.listen(1337, function() {
  console.log('Listening at Port 1337!');
});
