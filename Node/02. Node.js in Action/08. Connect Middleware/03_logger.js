// Setup function can be called multiple times with different configurations
function setup(format) {
  var regexp = /:(\w+)/g;

  // Actual logger component that Connect will use
  return function logger(req, res, next) {
    var str = format.replace(regexp, function(match, property) {
      return req[property];
    })
    console.log(str);
    next();
  }
}

module.exports = setup;
