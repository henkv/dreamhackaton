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
		platforms.enableBody = true;
		platforms.physicsBodyType = Phaser.Physics.ARCADE;
		platforms.setAll("body.allowGravity", false);
		
		var plat = platforms.create(0,600, "tileGround1");
		plat.body.allowGravity = false;
		plat.body.immovable = true;

		plat = platforms.create(400,600, "tileGround2");
		plat.body.allowGravity = false;
		plat.body.immovable = true;
		
		plat = platforms.create(800,600, "tileGround2");
		plat.body.allowGravity = false;
		plat.body.immovable = true;
		
		plat = platforms.create(1200,600, "tileGround1");
		plat.body.allowGravity = false;
		plat.body.immovable = true;

		


	}
};