var characters = {}

function Player(id, name){

	this.id = id;
	this.facing = true;
	this.reach = 20;
	this.maxVelocity = 750;

	characters[this.id] = {
		running: false 
	};
	characters[this.id]["sprite"] = {};
	//game.add.sprite(0,0,'char');

	var style = { font: "20px Arial", fill: "#000000", align: "center" };

    characters[this.id]["name"] = game.add.text(0, 0, name, style);

    characters[this.id]["name"].anchor.set(0.5);

	characters[this.id]["sprite"] = game.add.sprite(Math.floor(Math.random()*1000),0,'char');
 	

 	game.physics.enable(characters[this.id]["sprite"]);


	characters[this.id]["sprite"].animations.add('idle', [0,1,2,3], 2, true);
	characters[this.id]["sprite"].animations.add('runMedium', [0,1,2,3,4,5,6,7], 12, true);
	characters[this.id]["sprite"].animations.add('runMediumLeft', [7,6,5,4,3,2,1,0], 12, true);
	characters[this.id]["sprite"].animations.add('punch',[0,1,2,3], 12, true);
	characters[this.id]["sprite"].animations.add('punchLeft',[3,2,1,0], 12, true);
	characters[this.id]["sprite"].animations.add('jump', [0,1,2,3], 12, false);
	characters[this.id]["sprite"].animations.add('jumpLeft', [3,2,1,0], 12, false);


	characters[this.id]["sprite"].body.collideWorldBounds = true;

	characters[this.id]["sprite"].body.width = 130;
	characters[this.id]["sprite"].body.checkCollision.up = false;
	characters[this.id]["sprite"].body.enable = true;
	characters[this.id]["sprite"].body.offset = new Phaser.Point(35,0)
	characters[this.id]["sprite"].body.bounce.y = 0.2;
	characters[this.id]["sprite"].body.linearDampning = 1;

	//	console.log(characters[this.id]["sprite"].body.width);

	characters[this.id]["sprite"].loadTexture('charIdle', 0, false);
	characters[this.id]["sprite"].play("idle");

	players.add(characters[this.id].sprite);
}

Player.prototype.run = function(){
	characters[this.id]["sprite"].play("run");
}

Player.prototype.move = function(x){
	var sprite = characters[this.id]["sprite"];
	var y = sprite.body.velocity.y;
	var xVel = sprite.body.velocity.x;

	if(y == 0) {
		if (characters[this.id].disableInput) {
			return;
		}
		if(x != 0){
			characters[this.id].running = true;
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
			characters[this.id].running = false;
			sprite.loadTexture('charIdle', 0, false);
			sprite.play("idle");
			this.facing = true;
		}
	} else {		
		characters[this.id].running = false;

		if(-xVel < 0){
			if(!this.facing){
				sprite.loadTexture('charJump', 0, false);
				this.facing = !this.facing;
			}

			sprite.play("jump");
		}	
		else{
			if(this.facing){
				sprite.loadTexture('charJumpLeft', 0, false);
				this.facing = !this.facing;
			}

			sprite.play("jumpLeft");
		}
	}
}

Player.prototype.jump = function(){
	var sprite = characters[this.id]["sprite"];
	var x = sprite.body.velocity.x;

	if(sprite.body.velocity.y == 0){
		sprite.body.velocity.y = -1000;
	} 
/*
	if(x > 0){
		if(!this.facing){
			sprite.loadTexture('charJump', 0, false);	
			this.facing = !this.facing;
		}

		sprite.play("jump");
	}	
	else{
		if(this.facing){
			sprite.loadTexture('charJumpLeft', 0, false);	
			this.facing = !this.facing;
		}

		sprite.play("jumpLeft");
	} */
	
}

Player.prototype.remove = function(){
	characters[this.id]["sprite"].destroy();
	characters[this.id]["name"].destroy();
	delete characters[this.id];
}

Player.prototype.smash = function(){

	console.log(characters[this.id]["name"]["text"] + " SMASH");
	sprite.loadTexture('charPunch', 0, false);	
	sprite.play("punch");

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

		var DZS = x + inset + body;
		var DZE = x + inset + body;

		var VDS = y;
		var VDE = y + height;

		for(c in characters){
			var val = characters[c];

			var cX = val.sprite.x;
			var cY = val.sprite.y;

			var TZS = cX + inset;
			var TZE = cX + inset + body; 

			var VTS = cY;
			var VTE = cY + height;


			if ( DZS < TZE  && DZE > TZS && c !== this.id && VDS < VTE && VDE > VTS ) {
				characters[c]["name"]["text"] = "Victim";
				characters[c].sprite.body.velocity.x = 1e3;
				// var sPoint = {"x": x+inset+(body/2), "y": (y+(height/2))};
				// var tPoint = {"x": characters[c]["x"]+inset+(body/2), "y": (characters[c]["y"]+(height/2)) };
				// var angle = angleTo(tPoint,sPoint);

				// console.log(Math.sin(angle/180*Math.PI), Math.cos(angle/180*Math.PI));

				// characters[c]["sprite"].body.velocity.y = Math.sin(angle/180*Math.PI) * -500;
				// characters[c]["sprite"].body.velocity.x = Math.cos(angle/180*Math.PI) * 500;
				
			}
		}
	}else{

		var DZS = x + inset;
		var DZE = x + inset;
 

		for(c in characters){
			var val = characters[c];

			var cX = val.sprite.x;
			var cY = val.sprite.y;

			var TZS = cX + inset;
			var TZE = cX + inset + body; 

			var VTS = cY;
			var VTE = cY + height;


			if ( DZS < TZE  && DZE > TZS && c !== this.id && VDS < VTE && VDE > VTS ) {
				characters[c]["name"]["text"] = "Victim";
				characters[c].sprite.body.velocity.x = -1e3;
				// var sPoint = {"x": x+inset+(body/2), "y": (y+(height/2))};
				// var tPoint = {"x": characters[c]["x"]+inset+(body/2), "y": (characters[c]["y"]+(height/2)) };
				// var angle = angleTo(tPoint,sPoint);

				// console.log(Math.sin(angle/180*Math.PI), Math.cos(angle/180*Math.PI));

				// characters[c]["sprite"].body.velocity.y = Math.sin(angle/180*Math.PI) * -500;
				// characters[c]["sprite"].body.velocity.x = Math.cos(angle/180*Math.PI) * 500;
				
			}
		}
	}
}

Player.prototype.getId = function(){
	return this.id;
}


var friction = function(id) {
	var running = characters[id].running;
	var sprite = characters[id]["sprite"];
	var vel = sprite.body.velocity;
	if (vel.y === 0 && vel.x > 0 && !running) {
		characters[id].sprite.body.velocity.x -= Math.min(50, Math.abs(vel.x));
	} else if (vel.y === 0 && vel.x < 0 && !running) {
		characters[id].sprite.body.velocity.x += Math.min(50, Math.abs(vel.x));
	}

}


function angleTo(a,b){
	var deltaX = b.x - a.x;
	var deltaY = b.y - a.y;

	//console.log(deltaX + " " + deltaY);

	//console.log(Math.atan2(deltaY,deltaX));

	return Math.atan2(deltaY,deltaX)*180/Math.PI;

}
