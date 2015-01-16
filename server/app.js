var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8000);

function handler(req, res) {
	var path = '/../browser/' + (req.url == '/' ? 'index.html' : req.url);

	fs.readFile(__dirname + path, function(err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading' + path);
		}

		res.writeHead(200);
		res.end(data);
	});
}

io.on('connection', function(socket) {
	var idCounter = 4;
	setInterval(function() {
		socket.emit('articlePublished', {
			id: idCounter++,
			categoryId: 1,
			title: Date.now(),
			author: 'server'
		});
	}, 5000);
});