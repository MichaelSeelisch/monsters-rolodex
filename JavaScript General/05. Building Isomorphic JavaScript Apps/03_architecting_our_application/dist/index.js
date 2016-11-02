'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _app = require('./lib/app');

var _app2 = _interopRequireDefault(_app);

var _HelloController = require('./HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

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

var application = new _app2.default({
  // Responds to http://localhost:8000/
  '/hello/{name*}': _HelloController2.default
}, {
  server: server,
  document: function document(application, controller, request, reply, body, callback) {
    _nunjucks2.default.render('./index.html', { body: body }, function (err, html) {
      if (err) {
        return callback('' + err, null);
      }
      callback(null, html);
    });
  }
});

application.start();