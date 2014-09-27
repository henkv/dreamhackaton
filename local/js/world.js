var world = {
	bg: null,
	preload: function() {
		game.load.image('tileGround1', 'assets/GroundTile1.png');
		game.load.image('tileGround2', 'assets/GroundTile2.png');
		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");
		platforms = game.add.group();
	}
};