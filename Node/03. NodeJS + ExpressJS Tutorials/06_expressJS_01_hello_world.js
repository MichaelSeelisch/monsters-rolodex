var express = require('express');
var app = express();

app.get('/hellothere', function(request, response) {
  response.send('Hello there, from express!');
});

app.listen(1337, function() {
  console.log('Listening at Port 1337');
});
