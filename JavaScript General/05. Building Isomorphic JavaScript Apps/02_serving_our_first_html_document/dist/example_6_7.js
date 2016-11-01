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

// Accessing path and query parameters
function getName(request) {
  // Default values
  var name = {
    fname: 'Rick',
    lname: 'Sanchez'
  };

  // Split path params
  var nameParts = request.params.name ? request.params.name.split('/') : [];

  /* Order of precedence
   * 1. Path param
   * 2. Query param
   * 3. Default Value
   */
  name.fname = nameParts[0] || request.query.fname || name.fname;
  name.lname = nameParts[1] || request.query.lname || name.lname;

  return name;
}

// Add the route
server.route({
  method: 'GET',
  path: '/hello/{name*}',
  handler: function handler(request, reply) {
    // Read template and compile using context object
    _nunjucks2.default.render('index.html',

    /* Path parameters
     * localhost:8000/hello/John/Smith
     */
    getName(request), function (err, html) {
      // Reply with html response
      reply(html);
    });
  }
});

// Start the server
server.start();