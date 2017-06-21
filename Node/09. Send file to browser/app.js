var http = require('http');

http.createServer(function (req, res) {
  var text_content = "This is a content of a txt file."

  res.writeHead(200, {
    'Content-Type': 'application/force-download',
    'Content-disposition':'attachment; filename=test.txt'
  });
  res.end(text_content);
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');