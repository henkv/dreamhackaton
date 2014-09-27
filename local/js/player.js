var characters = {}

function Player(id, name){

	this.id = id;
	this.facing = true;
	this.reach = 20;
	this.maxVelocity = 750;

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};
	//game.add.sprite(0,0,'char');

	var style = { font: "20px Arial", fill: "#000000", align: "center" };

    characters[this.id]["name"] = game.add.text(0, 0, name, style);

    characters[this.id]["name"].anchor.set(0.5);

	characters[this.id]["sprite"] = players.create(Math.floor(Math.random()*1000),0,'char');
 	
 	var sprite = characters[this.id]["sprite"];

 	game.physics.enable(sprite, Phaser.Physics.ARCADE);

	sprite.animations.add('idle', [0,1,2,3], 2, true);
	sprite.animations.add('runMedium', [0,1,2,3,4,5,6,7], 12, true);
	sprite.animations.add('runMediumLeft', [7,6,5,4,3,2,1,0], 12, true);

	sprite.body.collideWorldBounds = true;

	sprite.body.width = 130;
	//	console.log(sprite.body.width);

	sprite.loadTexture('charIdle', 0, false);
	sprite.play("idle");
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
		}	
		else{
			if(this.facing){
				sprite.loadTexture('charLeft', 0, false);
				this.facing = !this.facing;
			}

			sprite.play("runMediumLeft");
		}

		sprite.body.velocity.x = Math.floor(this.maxVelocity*x);
	}else{
		sprite.loadTexture('charIdle', 0, false);
		sprite.play("idle");
		this.facing = true;
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
	characters[this.id]["name"].destroy();
	delete characters[this.id];
}

Player.prototype.smash = function(){

	console.log(characters[this.id]["name"]["text"] + " SMASH");

	var sprite = characters[this.id]["sprite"];
	var x = sprite.position.x;
	var y = sprite.position.y;

	var width = 200;
	var height = 200;
	var body = 130;
	var inset = (width-body)/2;
	var reach = this.reach;

	//console.log(x + " " + reach);

	if(this.facing){

		var dangerZone = x+inset+body+reach;

		for(c in characters){

			if(characters[c]["x"]+inset < dangerZone && characters[c]["y"]+inset < y+height && this.id != c){
				//var sPoint = new Phaser.Point(x+inset);
			}
		}
	}else{

		var dangerZone = x+inset-reach;
		for(c in characters){
			if(characters[c]["x"]+inset+body > dangerZone && characters[c]["y"]+inset < y+height && this.id != c){
				console.log("Hit: " + characters[c]["name"]["text"]);
			}
		}
	}
}

Player.prototype.getId = function(){
	return this.id;
}
