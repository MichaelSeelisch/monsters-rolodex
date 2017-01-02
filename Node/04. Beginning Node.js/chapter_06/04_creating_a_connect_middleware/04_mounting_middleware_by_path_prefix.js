var connect = require('connect');

function echo(req, res, next) {
  req.pipe(res);
}

connect()
  .use('/echo', echo)
  .use(function (req, res) {
    res.end('Wassup!');
  })
  .listen(3000);

console.log('Server running on port 3000');