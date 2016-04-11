var connect = require('connect');

// 'Logger': 1st middleware component
function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}

// 'Hello': 2nd middleware send a response to the HTTP request
function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

connect()
  .use(logger)
  .use(hello)
  .listen(3000);

/*
  var app = connect();
  app.use(logger);
  app.use(hello);
  app.listen(3000);
*/
