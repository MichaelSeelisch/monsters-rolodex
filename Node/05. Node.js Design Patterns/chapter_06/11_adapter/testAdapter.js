const fs = require('fs');

// Original fs...
fs.writeFile('file.txt', 'Hello!', () => {
    fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
        console.log(res);
    });
});

// Try to read a missing file
fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(err);
});

// Adapter fs...
const levelup = require('level');
const fsAdapter = require('./fsAdapter');
const db = levelup('./fsDB', {valueEncoding: 'binary'});
const fs = fsAdapter(db);
