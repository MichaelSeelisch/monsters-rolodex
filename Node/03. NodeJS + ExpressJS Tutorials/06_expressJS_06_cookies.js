var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp) {
  resp.cookie('myFirstCookie', 'looks Good', {}); // Third paramter: permanent cookie, f. e. 'Angemeldet bleiben'
  resp.end('Cookie set...');
});

app.get('/removeCookie', function(req, resp) {
  resp.clearCookie('myFirstCookie');
  resp.end('Cookie erased...');
});


app.listen(1337, function() {
  console.log('Yeah?');
});
