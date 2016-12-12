var connect = require('connect');

function echo(req, res, next) {
  req.pipe(res);
}

connect()
  .use(echo)
  .listen(3000);

console.log('Server running on port 3000');