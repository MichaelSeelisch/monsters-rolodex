var fs = require('fs');

console.log('Executed Before File Reading.');

// Asynchronus flow
fs.readFile('./files/file', 'utf8', function(error, data) {
  console.log(data);
});

// Synchronus flow
/*
  var data = fs.readFile('./files/file', 'utf8');
  console.log(data);
*/

console.log('Executed After File Reading, probably.');
