var player = {};

player.preload = function() {
	game.load.spritesheet('charRunRight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charRunLeft', 'assets/Run_left.png',200,200,8);
	game.load.spritesheet('charIdleRight', 'assets/Idle.png',200,200,4);
}

player.group = [];

player.create = function() {


}

player.make = function() {
	var p = game.add.sprite(32,32, "charIdleRight");

    game.physics.enable(p);


    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

	this.group.push(p);

}

player.update = function() {
	for (var i = 0; i < this.group.length; i++) {
		

		game.physics.arcade.collide(this.group[i], layer);
	};
}