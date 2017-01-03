// Configurable middleware creator
function greeter(message) {
  return function (req, res, next) {
    res.end(message);
  };
}

var helloWorldGreeter = greeter('Hello World!');
var heyThereGreeter = greeter('Hey There!');

var connect = require('connect');
connect()
  .use('/hello', helloWorldGreeter)
  .use('/hey', heyThereGreeter)
  .listen(3000);

console.log('Server running on port 3000');