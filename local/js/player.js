var characters = {}

function Player(id, name){

	this.id = id;
	this.facing = true;
	this.maxVelocity = 750;

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};
	//game.add.sprite(0,0,'char');

	var style = { font: "20px Arial", fill: "#000000", align: "center" };

    characters[this.id]["name"] = game.add.text(0, 0, name, style);
    console.log(characters[this.id]["name"]);
    characters[this.id]["name"].anchor.set(0.5);

	characters[this.id]["sprite"] = players.create(0,0,'char');
 	
 	var sprite = characters[this.id]["sprite"];

 	game.physics.enable(sprite, Phaser.Physics.ARCADE);

	//sprite.animations.add('runFast', [0,1,2,3,4,5,6,7], 16, true);
	//sprite.animations.add('runSlow', [0,1,2,3,4,5,6,7], 8, true);
	sprite.animations.add('runMedium', [0,1,2,3,4,5,6,7], 12, true);

	//sprite.animations.add('runFastLeft', [7,6,5,4,3,2,1,0], 16, true);
	//sprite.animations.add('runSlowLeft', [7,6,5,4,3,2,1,0], 8, true);
	sprite.animations.add('runMediumLeft', [7,6,5,4,3,2,1,0], 12, true);
	sprite.body.collideWorldBounds = true;
}

Player.prototype.run = function(){
	characters[this.id]["sprite"].play("run");
}

Player.prototype.move = function(x){
	var sprite = characters[this.id]["sprite"];
	if(x != 0){
		if(x > 0){
			if(!this.facing){
				sprite.loadTexture('char', 0, false);
				this.facing = !this.facing;
			}

			sprite.play("runMedium");

			// if(Math.abs(x) < 0.5){
			// 	sprite.play("runSlow");
			// }else if(Math.abs(x) < 0.75){
				
			// }else{
			// 	sprite.play("runFast");
			// }
		}	
		else{
			if(this.facing){
				sprite.loadTexture('charLeft', 0, false);
				this.facing = !this.facing;
			}

			sprite.play("runMediumLeft");

			// if(Math.abs(x) < 0.5){
			// 	sprite.play("runSlowLeft");
			// }else if(Math.abs(x) < 0.75){
				
			// }else{
			// 	sprite.play("runFastLeft");
			// }
		}

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
		sprite.body.velocity.y = -1000;
	} 
}

Player.prototype.remove = function(){
	characters[this.id]["sprite"].destroy();
	delete characters[this.id]["sprite"];
}

Player.prototype.getId = function(){
	return this.id;
}
