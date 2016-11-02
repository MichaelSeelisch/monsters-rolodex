'use strict';

var _index = require('./lib/index.client');

var _index2 = _interopRequireDefault(_index);

var _HelloController = require('./HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var application = new _index2.default({
  '/hello/{name*}': _HelloController2.default
}, {
  // Query selector for the element in which the controller response should be injected
  target: 'body'
});

application.start();