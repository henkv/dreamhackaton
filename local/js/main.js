var game = new Phaser.Game(500, 400, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {
	game.load.spritesheet('char', 'assets/Run.png',200,200,4);
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//120,221

	// sprite.frame = 0; or any number up to 15 to access a specific frame

	// or,

	

	// plays all the frames, at 1 frame per second, looping.
}
 
function update() {
}

	
var character = (function(){
	var c = {}
		sprite = {},
		id = 0;

	var makeId = function(){
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}

	var animRun = function(){
		sprite.play('ani');
	}

	c.create = function(){
		sprite = game.add.sprite(0,0,'char');
		sprite.animations.add('ani', [0,1,2,3], 8, true);

		id = makeId();
	}

	c.run = function(){
		animRun();
	}

	c.getId = function(){
		return id;
	}

	return c;
})();


