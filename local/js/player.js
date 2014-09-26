var characters = {};

function Player(id){
	this.id = id;
	this.facing = true;
	this.maxVelocity = 450;

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};

 	characters[this.id]["sprite"] = game.add.sprite(0,0,'char');
 	game.physics.enable(characters[this.id]["sprite"], Phaser.Physics.ARCADE);
	characters[this.id]["sprite"].animations.add('run', [0,1,2,3,4,5,6,7], 12, true);
}

Player.prototype.run = function(){
	characters[this.id]["sprite"].play("run");
}

Player.prototype.move = function(x){
	if(x >= 0)
		characters[this.id]["sprite"].play("run");
	else
		characters[this.id]["sprite"].play("run");

	//console.log(Math.floor(this.maxVelocity*x));
	console.log(x);
	characters[this.id]["sprite"].body.velocity.x = Math.floor(this.maxVelocity*x);
}

Player.prototype.remove = function(){
	delete characters[this.id]["sprite"];
}

Player.prototype.getId = function(){
	return this.id;
}
