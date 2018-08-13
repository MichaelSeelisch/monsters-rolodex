const fs = require('fs') ;

fs.access('/usr/local/bin/node', fs.R_OK | fs.W_OK | fs.X_OK, console.log);
