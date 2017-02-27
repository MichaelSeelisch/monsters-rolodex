var Q = require('q');

function iAsync() {
  return Q.when(null).then(function () {
    var foo;
    
    // Simulate an uncaught exception because of a programming error
    foo.bar; // access a member on an undefined variable
  });
}

iAsync()
  .catch(function (err) {
    var foo;
    foo.bar; // Uncaught exception, rejects the next promise
  })
  .done(); // Since previous promise is rejected throws the rejected value as an error