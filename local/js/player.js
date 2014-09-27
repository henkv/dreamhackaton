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

		var DZS = x+inset+body;
		var DZE = x+inset*1.1+body;
		
		for(c in characters){
			var val = characters[c];

			var cX = val.sprite.x;
			var cY = val.sprite.y;

			var TZS = cX+inset;
			var TZE = cX+inset+body; 

			if ( DZS < TZE  && DZE > TZS && c !== this.id  /*dont hit yourself stupids*/) {
				characters[c]["name"]["text"] = "Victim";
				characters[c].sprite.kill();
				// var sPoint = {"x": x+inset+(body/2), "y": (y+(height/2))};
				// var tPoint = {"x": characters[c]["x"]+inset+(body/2), "y": (characters[c]["y"]+(height/2)) };
				// var angle = angleTo(tPoint,sPoint);

				// console.log(Math.sin(angle/180*Math.PI), Math.cos(angle/180*Math.PI));

				// characters[c]["sprite"].body.velocity.y = Math.sin(angle/180*Math.PI) * -500;
				// characters[c]["sprite"].body.velocity.x = Math.cos(angle/180*Math.PI) * 500;
				
			}
		}
	}else{

		var dangerZone = x+inset-reach;
		for(c in characters){
			//characters[c]["name"]["text"] = "Victim";
			if(characters[c]["x"]+inset+body > dangerZone && characters[c]["y"]+inset < y+height && this.id != c){
				console.log("Hit: " + characters[c]["name"]["text"]);
			}
		}
	}
}

Player.prototype.getId = function(){
	return this.id;
}





function angleTo(a,b){
	var deltaX = b.x - a.x;
	var deltaY = b.y - a.y;

	//console.log(deltaX + " " + deltaY);

	//console.log(Math.atan2(deltaY,deltaX));

	return Math.atan2(deltaY,deltaX)*180/Math.PI;

}
