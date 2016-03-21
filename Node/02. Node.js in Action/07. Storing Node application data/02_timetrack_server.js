var http  = require('http'),
    work  = require('./_lib/timetrack'),
    mysql = require('mysql');

var db = mysql.createConnection({
  host: 'michaelseelisch.de',
  user: 'd0216ab6',
  password: 'Qmwdq2H5PkAUpGrg',
  database: 'd0216ab6'
});

var server = http.createServer(function(req, res) {
  switch(req.method) {
    case 'POST':
      switch(req.url) {
        case'/':
          console.log('POST add...');
          work.add(db, req, res);
          break;

        case '/archive':
          console.log('POST archive...');
          work.archive(db, req, res);
          break;

          case '/delete':
          console.log('POST delete...');
          work.delete(db, req, res);
          break;
      }
      break;

    case 'GET':
      switch(req.url) {
        case '/':
          console.log('GET show...');
          work.show(db, res);
          break;

        case '/archived':
          console.log('GET archived...');
          work.showArchived(db, res);
          break;
      }
      break;
  }
});

db.query(
  // TABLE-creation SQL
  'CREATE TABLE IF NOT EXISTS work ('
  + 'id INT(10) NOT NULL AUTO_INCREMENT, '
  + 'hours DECIMAL(5, 2) DEFAULT 0, '
  + 'date DATE, '
  + 'archived INT(1) DEFAULT 0, '
  + 'description LONGTEXT, '
  + 'PRIMARY KEY(id))',
  function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as id ' + db.threadId);
    console.log('Server started...');
    // Start HTTP server
    server.listen(3000, '127.0.0.1');
  }
);
