const fs = require('fs');

const rs = fs.createReadStream('/dev/urandom');
var size = 0;

rs.on('data', (data) => {
    size += data.length;
    console.log('File size:', size);

    if (size === 25493504) {
        rs.pause();
        console.log('====== Stream paused =====');

        setTimeout(() =>
            rs.resume(), 2000
        );
    }
});
