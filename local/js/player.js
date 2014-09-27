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

	this.group[id] = p;

}

player.update = function() {
	for(var dude in player.group) {
		
		for(var key in world.layer) {
			game.physics.arcade.collide(this.group[dude], world.layer[key]);
		}
		
	}
}