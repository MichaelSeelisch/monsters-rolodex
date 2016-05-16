var connect = require('connect');
var cookieParser = require('cookie-parser')

var app = connect()
  .use(cookieParser('this is a secret'))
  .use(function(req, res){
    console.log(req.cookies);
    // console.log(req.signedCookies);
    res.end('Finished!\n');
  }).listen(3000);

/*
  $ curl http://localhost:3000/
  {}
  {}
*/

/*
  $ curl http://localhost:3000/ --cookie "Cho=Kim;Greet=Hello"
  { foo: 'bar', bar: 'baz' }
  {}
*/

/*
  $ curl http://localhost:3000/ --cookie "name=luna.PQLM0wNvqOQEObZXUkWbS5m6Wlg"
  {}
  { name: 'luna' }
*/
