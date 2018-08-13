const net = require('net');
const socket = net.connect(1337, 'localhost');
const name = process.argv[2] || 'Dave';

socket.write(name);
socket.on('data', (data) => {
    // We have to call the toString method on incoming data because sockets deliver raw binary data in the form of Node buffers
    console.log(data.toString());
});
socket.on('close', () => {
    console.log('-> disconnected by server');
});
