var connect = require('connect');
var bodyParser = require('body-parser');
var http = require('http');

var app = connect()
  .use(bodyParser.json({
    limit: '32kb'
  }))
  .use(hello);

function hello() {
  console.log('Finish...');
}

http.createServer(app).listen(3000);


// => Throws error: 'Error: request entity too large'
