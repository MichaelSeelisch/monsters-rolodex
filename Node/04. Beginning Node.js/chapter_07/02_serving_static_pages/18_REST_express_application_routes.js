var express = require('express');

var app = express();
app.route('/')
  .all(function (req, res, next) {
    res.write('all\n');
    next();
  })
  .get(function (req, res, next) {
    res.end('get');
  })
  .put(function (req, res, next) {
    res.end('put');
  })
  .post(function (req, res, next) {
    res.end('post');
  })
  .delete(function (req, res, next) {
    res.end('delete');
  });
app.listen(3000);

console.log('Server running on port 3000');

// Run Server:
// $ node 18_REST_express_application_routes.js

// Testing in Terminal:
// $ curl http://127.0.0.1:3000
// $ curl -X PUT http://127.0.0.1:3000
// $ curl -X POST http://127.0.0.1:3000
// $ curl -X DELETE http://127.0.0.1:3000