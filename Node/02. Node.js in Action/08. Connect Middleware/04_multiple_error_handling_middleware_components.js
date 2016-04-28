var connect = require('connect');

var api = connect()
  .use(users)
  .use(pets)
  .use(errorHandler);

var app = connect()
  .use(hello)
  .use('/api', api) // When URL contains '/api' execute middleware in var 'api'
  .use(errorPage)
  .listen(3000);

function hello(req, res, next) {
  if(req.url.match(/^\/hello/)) {
    res.end('Hello World\n');
  }
  else {
    next();
  }
};

function errorPage(err, req, res, next) {
  console.log('Error in \'hello\' function.');
}

var db = {
  users: [
    { name: 'tobi' },
    { name: 'loki' },
    { name: 'jane' },
  ]
};

function users(req, res, next) {
  var match = req.url.match(/^\/user\/.+/);
  if(match) {
    var i;
    var user;
    var entry;
    for(i = 0; i < db.users.length; ++i) {
      entry = db.users[i];
      if(entry.name == match[0].split('/user/')[1]) {
        user = entry;
        break;
      }
    }

    if(user) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    }
    else {
      var err = new Error('User not found');
      err.notFound = true;
      next(err);
    }
  }
  else {
    next();
  }
};

function pets(req, res, next) {
  if(req.url.match(/^\/pet\/.+/)) {
    foo();
  }
  else {
    next();
  }
};

function errorHandler(err, req, res, next) {
  // console.log(err.stack);
  res.setHeader('Content-Type', 'application/json');
  if(err.notFound) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: err.message }));
  }
  else {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

/*
  Testing:
  Console: $ node 04_multiple_error_handling_middleware_components.js

  Browser:
  http://localhost:3000/api/user/roland // = User not found
  http://localhost:3000/api/user/tobi // = User found
  http://localhost:3000/api/pet/foo // = Internal Server Error
*/
