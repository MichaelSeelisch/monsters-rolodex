'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure nunjucks to read from the dist directory
_nunjucks2.default.configure('./dist');

// Create a server with a host and port
var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function handler(request, reply) {
    // Read template and compile using context object
    _nunjucks2.default.render('index.html', {

      /* Query parameters
       * localhost:8000/hello?fname=jerry&lname=smith.
       */
      fname: request.query.fname,
      lname: request.query.lname

    }, function (err, html) {
      // Reply with html response
      reply(html);
    });
  }
});

// Start the server
server.start();