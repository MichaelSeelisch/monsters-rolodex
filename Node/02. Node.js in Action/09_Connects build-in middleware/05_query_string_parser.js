var connect = require('connect');
var http = require('http');

var app = connect()
  .use(connect.query())
  .use(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.query));
});

http.createServer(app).listen(3000);
