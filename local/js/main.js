var game = new Phaser.Game(400, 300, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
}
 
function update() {
}


var character = (function(){
	var c = {};

	var id = 0;

	var makeId = function(){
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}

	c.create = function(){
		id = makeId();
	}

	c.getId = function(){
		return id;
	}

	return c;
})();