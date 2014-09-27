function makePlayer() {
	var player;
	player = game.add.sprite(0,0,"char");
	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.2;
	player.body.collideWorldBounds = true;

	return player;
}