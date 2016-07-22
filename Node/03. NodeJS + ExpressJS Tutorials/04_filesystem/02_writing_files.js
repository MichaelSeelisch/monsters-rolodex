var fs = require('fs');

console.log('Executed Before File Reading.');

// Asynchronus flow
fs.writeFile('./files/file_for_writing', 'Hello there! What\'s up?!', 'utf8', function(error, data) {
  if(error) {
    throw error;
  }

  console.log('File written!');
});

// Synchronus flow
/*
  var data = fs.writeFileSync('./files/file_for_writing', 'Hello there! What\'s up?!', 'utf8');
  console.log('File written!');
*/

console.log('Executed After File Reading, probably.');
