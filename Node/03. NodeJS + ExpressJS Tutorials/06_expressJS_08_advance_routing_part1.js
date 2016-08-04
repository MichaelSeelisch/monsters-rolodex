var express = require('express');
var app = express();
var router = express.Router();

/*
  app.get('/', function(requ, resp) {
    resp.end('Hey there!');
  });
*/

app.use('/myFirstRoute', router);

// http://localhost:1337/myFirstRoute//heyThereFirstRoute
router.get('/heyThereFirstRoute', function(req, resp) {
  resp.end('What is going on!');
});

// http://localhost:1337/myFirstRoute//heyThereFirstRouteAgain
router.get('/heyThereFirstRouteAgain', function(req, resp) {
  resp.end('What is going on there, this is a bit different!');
});

app.listen(1337, function() {
  console.log('I\'m listening...');
});
