'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);
  }

  _createClass(Application, [{
    key: 'navigate',
    value: function navigate(url) {
      var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // If browser does not support the history API then set location and return
      if (!history.pushState) {
        window.location = url;
        return;
      }

      console.log(url);

      // Only push history stack if push argument is true
      if (push) {
        history.pushState({}, null, url);
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      // Create event listener popstate
      this.popStateListener = window.addEventListener('popstate', function (event) {
        var _window$location = window.location,
            pathname = _window$location.pathname,
            search = _window$location.search;

        var url = '' + pathname + search;
        _this.navigate(url, false);
      });

      // Create click listener that delegates to navigate method if it meets the criteria for executing
      this.clickListener = document.addEventListener('click', function (event) {
        var target = event.target;

        var identifier = target.dataset.navigate;
        var href = target.getAttribute('href');

        if (identifier !== undefined) {
          // If user clicked on an href then prevent the default browser action (loading a new HTML doc)
          if (href) {
            event.preventDefault();
          }

          // Navigate using the identifier if one was defined; or the href
          _this.navigate(identifier || href);
        }
      });
    }
  }]);

  return Application;
}();

exports.default = Application;