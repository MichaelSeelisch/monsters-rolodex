var fs = require('fs');

function loadJSON (filename, cb) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      return cb(err);
    }
    try {
      var parsed = JSON.parse(data);
    }
    catch (err) {
      return cb(err);
    }
    
    return cb(null, parsed);
};

// Load invalid json
loadJSON('bad.json', function (err, data) {
  if (err) {
    console.log('bad.json error', err.message);
  }
  else {
    console.log(data);
  }
);