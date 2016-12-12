var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource not found.');
  response.end();
}

var mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
};

var server = http.createServer(function (req, res) {
  if(req.method == 'GET') {

    // Resolve file path to filesystem path
    var fileURL;
    if(req.url == '/') {
      fileURL = '/index.html'
    }
    else {
      fileURL = req.url;
    }
    
    var filePath = path.resolve('./' + fileURL);

    // Lookup mime Type
    var fileExt = path.extname(filePath);
    var mimeType = mimeLookup[fileExt];

    if(!mimeType) {
      send404(res);
      return;
    }

    // See, if we have that file
    fs.exists(filePath, function(exists) {

      // If not...
      if(!exists) {
        send404(res);
        return;
      }

      // Finally stream the file
       res.writeHead(200, { 'Content-Type': mimeType });
      fs.createReadStream(filePath).pipe(res);     
    }); 
  }
  else {
    send404(res);
  }
});
server.listen(3000);

console.log('Server running on port 3000');