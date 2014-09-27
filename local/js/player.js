var player = {};

player.preload = function() {
	game.load.spritesheet('charRunRight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charRunLeft', 'assets/Run_left.png',200,200,8);
	game.load.spritesheet('charIdleRight', 'assets/Idle.png',200,200,4);
	game.load.spritesheet('charPunchRight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charPunchLeft', 'assets/Run_left.png',200,200,8);
}

player.group = {};

player.facing = {};

player.create = function() {

}

player.make = function(id) {
	var p = game.add.sprite(32,32, "charIdleRight");
	p.animations.add('idleRight', [0,1,2,3], 2, true);
	p.animations.add('runMediumRight', [0,1,2,3,4,5,6,7], 12, true);
	p.animations.add('runMediumLeft', [7,6,5,4,3,2,1,0], 12, true); 
	p.animations.add('punchRight',[0,1,2,3], 12, true);
	p.animations.add('punchLeft',[3,2,1,0], 12, true);

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
}


player.smash = function(id) {
	//this.group[id].body.velocity.y = -500; 
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
	sprite.body.velocity.x = this.maxVelocity*x;

	var sprite = characters[this.id]["sprite"];
	if (characters[this.id].disableInput) {
		return;
	}
	if(x != 0){
		characters[this.id].running = true;
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
		//characters[this.id].running = false;
		if(this.facing[id]=="right"){
			sprite.loadTexture('charIdleRight', 0, false);
		} else {
			sprite.loadTexture('charIdleLeft', 0, false);
		}
		sprite.play("idleRight");

	}
}