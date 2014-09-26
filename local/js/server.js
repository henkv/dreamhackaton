var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("../remote"));
server.listen(80);

console.log("serverUp");

function makeId () {
  return Math.random().toString(36).substr(2, 6);
};

io.on("connection", function(socket) {
	var id = makeId();
	console.log(id, "connected");

	socket.on("jump", function() {
		console.log(id, "jump")
	})
	socket.on("attack", function() {
		console.log(id, "attacked")
	})

	socket.on("disconnect", function() {
		console.log(id, "disconnect")
	})
});