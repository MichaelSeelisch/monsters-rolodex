var connect = require('connect');
var bodyParser = require('body-parser');
var http = require('http');

function type(type, fn) {
  return function(req, res, next) {
    var ct = req.headers['content-type'] || '';
    if(0 != ct.indexOf(type)) {
      return next();
    }
    fn(req, res, next);
  }
};

var app = connect()
  .use(type('application/x-www-form-urlencoded', bodyParser.urlencoded({ limit: '64kb', extended: false })))
  .use(type('application/json', bodyParser.json({ limit: '32kb' })))
  .use(type('image', bodyParser.raw({ limit: '2mb' })))
  .use(type('video', bodyParser.raw({ limit: '300mb' })))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(hello);

function hello() {
  console.log('Finish...');
}

http.createServer(app).listen(3000);
