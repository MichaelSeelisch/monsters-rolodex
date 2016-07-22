var express = require('express');
var app = express();

// Browser: http://localhost:port/cssFiles
// Access to CSS file: http://localhost:1337/cssFiles/06_expressJS_02_serving_static_files.css
app.use('/cssFiles', express.static(__dirname + '/assets'))

app.get('/hellothere', function(request, response) {
  response.send('Hello there, from express!');
});

app.listen(1337, function() {
  console.log('Listening at Port 1337');
});
