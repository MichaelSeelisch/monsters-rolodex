var http = require('http');

var req = http.request({
  method: 'POST',
  port: 3000,
  headers: {
    // Notify server that you're sending JSON data
    'Content-Type': 'application/json'
  }
});
// Begin sending a very large array object
req.write('[');
var n = 300000;
while(n--) {
  req.write('"foo",')
}
req.write('"bar"]');
req.end();
