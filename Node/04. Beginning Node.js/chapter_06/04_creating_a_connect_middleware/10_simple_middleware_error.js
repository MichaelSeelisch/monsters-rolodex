var connect = require('connect');

connect()
  .use(function (req, res, next) {
    next('An error has occured!');
  })
  .use(function (req, res, next) {
    res.end('I will never get called');
  })
  .listen(3000);

console.log('Server running on port 3000');