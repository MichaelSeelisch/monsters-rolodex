var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
  .use(bodyParser.json());

app.listen(3000);
