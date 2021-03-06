var player = {};

player.preload = function() {
	game.load.spritesheet('charRunRight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charRunLeft', 'assets/Run_left.png',200,200,8);
	game.load.spritesheet('charIdleRight', 'assets/Idle.png',200,200,4);
	game.load.spritesheet('charIdleLeft', 'assets/Idle_left.png',200,200,4);
	game.load.spritesheet('charPunchRight', 'assets/Punch.png',200,200,4);
	game.load.spritesheet('charPunchLeft', 'assets/Punch_left.png',200,200,4);
}

player.group = {};

player.facing = {};

player.create = function() {

}

player.make = function(id) {
	var p = game.add.sprite(32,32, "charIdleRight");
	p.animations.add('charIdleLeft', [0,1,2,3], 2, true);
	p.animations.add('runMediumRight', [0,1,2,3,4,5,6,7], 12, true);
	p.animations.add('runMediumLeft', [7,6,5,4,3,2,1,0], 12, true); 
	p.animations.add('punchRight',[0,1,2,3], 8, true);
	p.animations.add('punchLeft',[0,1,2,3], 8, true);
	p.animations.add('jumpRight',[0], 1, true);
	p.animations.add('jumpLeft',[0], 1, true);

    game.physics.enable(p);

    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;
    p.body.checkCollision.up = false;
    p.body.checkCollision.left = false;
    p.body.checkCollision.right = false;

    p.body.maxVelocity = 750;
    p.body.setSize(130,180,35,0);

	this.group[id] = p;
	this.facing[id] = "right";
}

player.jump = function(id) {
	var vY = Math.round(this.group[id].body.velocity.y);
	if (vY >= -6 && vY <= -4) {
		this.group[id].body.velocity.y = -1000; 
	}
	/*
	if(this.facing[id]=="right"){
		sprite.loadTexture('jumpRight', 0, false);
		this.facing[id] = "right";
		sprite.play("charRunRight");
	}else{
		if(this.facing[id]=="left"){
			sprite.loadTexture('jumpLeft', 0, false);
			this.facing[id]="left";
		}
		sprite.play("charRunLeft");
	} */
}


player.smash = function(id) {
	var sprite = this.group[id];
	var x = sprite.body.x;
	var y = sprite.body.y;

	var width = sprite.body.width;
	var height = sprite.body.height;
	var reach = 5;

	if ( this.facing[id] === "right" ) {
		var DZS = x + width;
		var DZE = x + width;

		for (var key in this.group) {
			var val = this.group[key];
			var tX = val.body.x;
			var tY = val.body.y;

			var tWidth = val.body.width;
			var tHeight = val.body.height;

			var TZS = tX;
			var TZE = tX + tWidth;

			if (key !== id && DZS > TZS && DZE < TZE && y < tY + tHeight && y + height > tY) {
				this.group[key].body.velocity.x = 1000;
			}

		}

	}


	if ( this.facing[id] === "left" ) {
		var DZS = x;
		var DZE = x;

		for (var key in this.group) {
			var val = this.group[key];
			var tX = val.body.x;
			var tY = val.body.y;

			var tWidth = val.body.width;
			var tHeight = val.body.height;

			var TZS = tX;
			var TZE = tX + tWidth;

			if (key !== id && DZS > TZS && DZE < TZE && y < tY + tHeight && y + height > tY) {
				val.body.velocity.x = -1000;
			}

		}

	}

	if(this.facing[id]=="right"){
		sprite.loadTexture('charPunchRight', 0, false);		
		sprite.play("punchRight");
	}else{
		if(this.facing[id]=="left"){
			sprite.loadTexture('charPunchLeft', 0, false);		
		}
		sprite.play("punchLeft");
	}
}

player.update = function() {
	for(var dude in player.group) {	
		for(var key in layer) {
			game.physics.arcade.collide(this.group[dude], layer[key]);
		}
		
	}
}

player.move = function(id, x) {
	var sprite = this.group[id];
	sprite.body.velocity.x = sprite.body.maxVelocity * x;

	var sprite = this.group[id];

	if(x != 0){
		if(x > 0){
			if(this.facing[id]==="left"){
				sprite.loadTexture('charRunRight', 0, false);
				this.facing[id] = "right";
			}

			sprite.play("runMediumRight");
		}	
		else{
			if(this.facing[id]=="right"){
				sprite.loadTexture('charRunLeft', 0, false);
				this.facing[id]="left";
		}

		sprite.play("runMediumLeft");
	}

		
	}else{
		if(this.facing[id]=="right"){
			sprite.loadTexture('charIdleRight', 0, false);
			sprite.play("idleRight");
		} else {
			sprite.loadTexture('charIdleLeft', 0, false);
			sprite.play("idleLeft");
		}
		

	}
}

player.destroy = function(id) {
	this.group[id].destroy();
}