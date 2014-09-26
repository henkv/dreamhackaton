var socket = io();

var pad = $("#pad");
var body = $("body");

var cY = pad.height() / 2;
var cX = pad.width() / 2;

$(window).on("resize", function(e) {
	cY = pad.height() / 2;
	cX = pad.width() / 2;
});


var oldX, oldY, newX = 0, newY = 0;
function padBounds( delta ) {
	return (Math.max(-cX, 
		Math.min( cX, delta)
	) / cX).toFixed(2);
}


var touch = function(e) {
	e.preventDefault();
	console.log(e.target.id, e.type.substr(5));
	if (e.target.id === "pad") {
		pad[e.type.substr(5)].call(undefined, e);
	}
	if (e.target.id === "a") {
		a[e.type.substr(5)].call(undefined, e);
	}
	if (e.target.id === "b") {
		b[e.type.substr(5)].call(undefined, e);
	}

}


var pad = {
	start: function(e) {
	},
	move: function(e) {
		var oe = e.originalEvent;
		var touches = oe.touches;
		for (touch in touches) {
			var touch = touches[touch];
			if (typeof touch === "object") {
				if (touch.target.id === "pad") {
					
					newX = padBounds(touch.clientX - cX);
					newY = padBounds(cY - touch.clientY);
					
					if (newX !== oldX && newY !== oldY) {
						socket.emit( "pad", newX, newY);
						oldX = newX;
						oldY = newY;
					}
					return;
				}
			}
		}
	},
	end: function(e) {
		var oe = e.originalEvent;
		var touches = oe.touches;
		
		if (oe.target.id === "pad") {
			
			newX = 0;
			newY = 0;
			
			if (newX !== oldX && newY !== oldY) {
				socket.emit( "pad", newX, newY);
				oldX = newX;
				oldY = newY;
			}
			return;
		}
	}
};

var a = {
	start: function(e) {
		socket.emit("jump");
	},
	move: function(e) {
		
	},
	end: function(e) {
		
	}
}

var b = {
	start: function(e) {
		socket.emit("attack");	
	},
	move: function(e) {
		
	},
	end: function(e) {
		
	}
}


body.on("touchstart", touch);
body.on("touchmove", touch);
body.on("touchend", touch);

















