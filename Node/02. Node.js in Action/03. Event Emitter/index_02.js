/*** CUSATOM PUBLISH/SUBSCRIBE SYSTEM USING EVENT EMITTER ***/

var events 	= require('events'),
	net 	= require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

// Custom event 'join'
channel.on('join', function(id, client) {
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId, message) {
		if(id != senderId) {
			this.clients[id].write(message);
		}
	}

	// Custom event 'broadcast'
	this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id) {
	client = this.clients[id];
	client.removeListener('broadcast', this.subscriptions[id]);
	channel.emit('broadcast', id, id + ' has left the chat.\n');
});

channel.on('shutdown', function() {
	channel.emit('broadcast', '', 'Chat has shutdown.\n');
	channel.removeAllListeners('broadcast');

	server.close();
});

// Diese Funktion wird jedesmal aufgerufen, wenn ein telnet connection erstellt wird, also, wenn sich ein User connected
var server = net.createServer(function(client) {
	var id = client.remoteAdress + ':' + client.remotePort;
	
	channel.emit('join', id, client); 

	client.on('data', function(data) {
		data = data.toString();
		if(data == 'shutdown\r\n') {
			channel.emit('shutdown');
		}
		channel.emit('broadcast', id, data);
	});

	client.on('close', function() {
		channel.emit('leave', id);
	});
});

server.listen(8888);