var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'))

app.get('/', function(req, resp) {
  // http://localhost:1337/?firstName=Micha&lastname=Seelisch
  var response = 'Hello ' + req.query.firstName;
  resp.end(response);
});

app.listen(1337, function() {
  console.log('Listening at Port 1337');
});
