var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var shell = require('shelljs');
var cmd = require('node-cmd');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

//io.on('connection', function(socket) {
//	console.log('a user connected');
//	socket.on('disconnect', function() {
//		console.log('user disconnected');
//	});
//});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('chat message', function(msg) {
		console.log('msg',msg)
		cmd.get(
		'D:\\software\\soft2\\VLC\\vlc.exe msg',
		function(data) {
			console.log("cacul")
		}
		);

		cmd.run('touch example.created.file');
		io.emit('chat message', msg);
	});
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});

//cmd.get(
//	'C:\\Program Files(x86)\\VideoLAN\\VLC\\vlc.exe',
//	function(data) {
//		console.log("cacul")
//	}
//);