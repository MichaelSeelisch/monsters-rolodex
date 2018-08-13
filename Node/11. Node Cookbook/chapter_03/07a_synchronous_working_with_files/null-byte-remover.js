const fs = require('fs');
const path = require('path');

const cwd = process.cwd(); // cwd = Current working directory

const bytes = fs.readFileSync(path.join(cwd, 'file.dat'));

const clean = bytes.filter(n => n); // If byte is 1 (true) oder 0 (false)

fs.writeFileSync(path.join(cwd, 'clean.dat'), clean);
fs.appendFileSync(
    path.join(cwd, 'log.txt'),
    (new Date) + ' ' + (bytes.length - clean.length) + ' bytes removed\n'
);
