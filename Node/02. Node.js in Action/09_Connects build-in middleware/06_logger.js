var connect = require('connect');
var morgan = require('morgan'); // previously logger
var http = require('http');

var app = connect()
  .use(morgan(':method :url :response-time ms'))
  .use(hello);


function hello() {
  console.log('Finish...');
}

// Log each request's query string
morgan.token('query-string', function(req, res){
  return url.parse(req.url).query;
});

http.createServer(app).listen(3000);
