var io = require("socket.io")(3001);

io.on('connection', function(socket)
{
	console.log("User connected.");

	socket.on('message', function(data)
	{
		io.emit('message', socket.nickname + " : " + data);
	});

	socket.on('login-req', function(data)
	{
		socket.nickname = data;
		socket.emit('logged', true);
	});

	socket.on('disconnect', function()
	{
		console.log("User disconnected.");
	});
});