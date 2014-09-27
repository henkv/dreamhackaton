var player = {};

player.preload = function() {
	game.load.spritesheet('charRunRight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charRunLeft', 'assets/Run_left.png',200,200,8);
	game.load.spritesheet('charIdleRight', 'assets/Idle.png',200,200,4);
}

player.group = {};

player.create = function() {


}

player.make = function(id) {
	var p = game.add.sprite(32,32, "charIdleRight");

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
}

player.move = function(id, x) {
	this.group[id].body.velocity.x = x * 300; 
}

player.jump = function(id) {
	var vY = Math.round(this.group[id].body.velocity.y);
	console.log(vY);
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