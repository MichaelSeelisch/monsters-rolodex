var methods = {};

// Private member
var output_01 = 1337;

// Public member
this.output_02 = 1557;

methods.sumNumbers = function(a, b) {
  output_01 = a + b;
  return a + b;
};

methods.circleCircumference = function(radius) {
  output_01 = Mat.PI * radius;
  return output_01;
};

methods.areaOfRectangel = function(a, b) {
  output_01 = a * b;
  return output_01;
};

exports.data = methods;
