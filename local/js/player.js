var characters = {};

function Player(id){

	this.id = id;
	this.facing = true;
	this.maxVelocity = 450;

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};
	//game.add.sprite(0,0,'char');
 	characters[this.id]["sprite"] = players.create(0,0,'char');

 	var sprite = characters[this.id]["sprite"];

 	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	sprite.animations.add('runFast', [0,1,2,3,4,5,6,7], 16, true);
	sprite.animations.add('runSlow', [0,1,2,3,4,5,6,7], 8, true);
	sprite.animations.add('runMedium', [0,1,2,3,4,5,6,7], 12, true);
	sprite.body.collideWorldBounds = true;
}

Player.prototype.run = function(){
	characters[this.id]["sprite"].play("run");
}

Player.prototype.move = function(x){
	var sprite = characters[this.id]["sprite"];
	if(x != 0){
		if(x > 0)
			if(Math.abs(x) < 0.5){
				sprite.play("runSlow");
			}else if(Math.abs(x) < 0.75){
				sprite.play("runMedium");
			}else{
				sprite.play("runFast");
			}
		else
			sprite.play("run");

		//console.log(Math.floor(this.maxVelocity*x));
		console.log(x);
		sprite.body.velocity.x = Math.floor(this.maxVelocity*x);
	}else{
		sprite.animations.stop();
		sprite.frame = 0;
		sprite.body.velocity.x = 0;
	}
}

Player.prototype.jump = function(){
	var sprite = characters[this.id]["sprite"];
	if(sprite.body.velocity.y == 0){
		sprite.body.velocity.y = -150;
	} 
}

Player.prototype.remove = function(){
	characters[this.id]["sprite"].destroy();
	delete characters[this.id]["sprite"];
}

Player.prototype.getId = function(){
	return this.id;
}
