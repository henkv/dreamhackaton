function createServer() {
	


var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("../remote"));
server.listen(80);

console.log("serverUp");

function makeId () {
  return Math.random().toString(36).substr(2, 6);
}


io.on("connection", function(socket) {
	var id = makeId();
	player.make(id);

	socket.on("pad", function(x, y) {
		player.move(id, x);
	})

	socket.on("jump", function() {
		player.jump(id);
	})
	socket.on("attack", function() {
		player.smash(id);
	})

	socket.on("disconnect", function() {
		player.remove(id);
	})
});


}