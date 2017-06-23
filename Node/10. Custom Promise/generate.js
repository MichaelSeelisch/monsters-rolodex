var dl = require('./download');
var http = require('http');

http.createServer((req, res) => {
  let zip = null;

  dl.download
    .then((data) => {
      zip = data;
    }).catch((err) => {
      console(err);
    });

  res.writeHead(200, {
    'Content-Type': 'application/force-download',
    'Content-disposition':'attachment; filename=test.zip'
  });
  res.end(zip);
  
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');

