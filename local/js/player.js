function makePlayer() {
	var player;
	player = game.add.sprite(0,0,"char");
	game.physics.arcade.enable(player);
	return player;
}