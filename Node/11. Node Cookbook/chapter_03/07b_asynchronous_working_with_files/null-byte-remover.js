setInterval(() => process.stdout.write('.'), 10).unref(); 

const fs = require('fs');
const path = require('path');

const cwd = process.cwd(); // cwd = Current working directory

fs.readFile(path.join(cwd, 'file.dat'), 'utf8', (err, bytes) => {
    if (err) {
        process.exit(1);
        return console.error(err);
    }

    const clean = bytes.split('').filter(n => n);

    fs.writeFile(path.join(cwd, 'clean.dat'), clean, (err) => {
        if (err) {
            process.exit(1);
            return console.error(err);
        }

        fs.appendFile(path.join(cwd, 'log.txt'), (new Date + ' ' + (bytes.length - clean.length) + ' bytes removed\n'), (err) => {
            if (err) {
                process.exit(1);
                return console.error(err);
            }
        });
    });
});
