var express = require('express');
var app = express();

app.get('/', function(req, resp) {
  resp.end('App started...');
});

app.listen(1337, function() {
  console.log('Yeah?');
});

/* Terminal command:
 * $ nodemon 10_nodemon.js
 */
