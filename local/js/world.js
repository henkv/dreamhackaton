var world = {
	bg: null,
	map: null,
	layers: {},
	preload: function() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
		game.load.image('GroundTileA', 'assets/GroundTileA.png');
		game.load.image('GroundTileB', 'assets/GroundTileB.png');
		game.load.image('GroundTileEnd1', 'assets/GroundTileEnd1.png');
		game.load.image('GroundTileEnd2', 'assets/GroundTileEnd2.png');
		game.load.image('GroundTileBigEnd1', 'assets/GroundTileBigEnd1.png');
		game.load.image('GroundTileBigEnd2', 'assets/GroundTileBigEnd2.png');
		
		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");

		this.map = game.add.tilemap("map");
		this.map.addTilesetImage("GroundTileA", "GroundTileA");
		this.map.addTilesetImage("GroundTileB", "GroundTileB");
		this.map.addTilesetImage("GroundTileEnd1", "GroundTileEnd1");
		this.map.addTilesetImage("GroundTileEnd2", "GroundTileEnd2");
		this.map.addTilesetImage("GroundTileBigEnd1", "GroundTileBigEnd1");
		this.map.addTilesetImage("GroundTileBigEnd2", "GroundTileBigEnd2");

		this.map.setCollisionBetween(1,1000);

		this.layers.pilars3 = this.map.createLayer("Pilars3");
		this.layers.pilars2 = this.map.createLayer("Pilars2");
		this.layers.pilars = this.map.createLayer("Pilars");
		this.layers.ground = this.map.createLayer("Ground");
		
		this.layers.pilars3.enableBody = true;
 		this.layers.pilars2.enableBody = true;
 		this.layers.pilars.enableBody = true;
 		this.layers.ground.enableBody = true;

 		this.layers.pilars3.debug = true;
 		this.layers.pilars2.debug = true;
 		this.layers.pilars.debug = true;
 		this.layers.ground.debug = true;

		game.physics.arcade.enable(this.layers.pilars3, Phaser.Physics.ARCADE, true);
		game.physics.arcade.enable(this.layers.pilars2, Phaser.Physics.ARCADE, true);
		game.physics.arcade.enable(this.layers.pilars, Phaser.Physics.ARCADE, true);
		game.physics.arcade.enable(this.layers.ground, Phaser.Physics.ARCADE, true);
		
		this.layers.pilars3.resizeWorld();
		this.layers.pilars2.resizeWorld();
		this.layers.pilars.resizeWorld();
		this.layers.ground.resizeWorld();
		

	},
	update: function(id) {
		
		var Sprite = characters[id].sprite;
		var yPos = Sprite.body.position.y + 200;
		

		game.physics.arcade.collide(Sprite, world.layers.ground, world.layers.pilars3, world.layers.pilars1,world.layers.pilars2);


		/*
		if(yPos < 200) {
			game.physics.arcade.collide(Sprite, world.layers.pilars3);

		} else if (yPos < 400) {
			game.physics.arcade.collide(Sprite, world.layers.pilars2);

		}  else if (yPos < 800) {
			game.physics.arcade.collide(Sprite, world.layers.pilars1);

		} else {
			game.physics.arcade.collide(Sprite, world.layers.ground);

		}*/
	}
};