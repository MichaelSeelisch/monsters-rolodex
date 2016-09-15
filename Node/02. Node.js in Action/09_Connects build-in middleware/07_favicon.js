var connect = require('connect');
var morgan = require('morgan'); // previously logger
var http = require('http');

var app = connect()
  .use(morgan(connect.favicon(__dirname + '/public/google_favicon.ico')))
  .use(morgan(':method :url :response-time ms'))
  .use(function(req, res) {
    red.end('Hello World!')
  });

http.createServer(app).listen(3000);
