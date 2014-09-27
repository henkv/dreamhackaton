var world = {
	bg: null,
	map: null,
	layers: {},
	preload: function() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
		game.load.image('tiles', 'assets/AllGroundTiles.png');
		
		game.load.image('Cloud1', 'assets/Cloud1.png');
		game.load.image('Cloud2', 'assets/Cloud2.png');
		game.load.image('Cloud3', 'assets/Cloud3.png');
		game.load.image('Cloud4', 'assets/Cloud4.png');

		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");

		this.map = game.add.tilemap("map");
		this.map.addTilesetImage("AllGroundTiles", "tiles");

		this.map.setCollisionBetween(0,100);

		//this.layers.pilars3 = this.map.createLayer("plat3");
	//	this.layers.pilars2 = this.map.createLayer("plat2");
	//	this.layers.pilars = this.map.createLayer("plat1");
		this.layers.ground = this.map.createLayer("ground");
		this.layers.ground.debug = true; 

		this.layers.ground.resizeWorld();

//		this.layers.pilars3.enableBody = true;
 //		this.layers.pilars2.enableBody = true;
 	//	this.layers.pilars.enableBody = true;
 		this.layers.ground.enableBody = true;

 		/*this.layers.pilars3.debug = true;
 		this.layers.pilars2.debug = true;
 		this.layers.pilars.debug = true;
 		this.layers.ground.debug = true;
*/
 		game.physics.arcade.enable(this.layers.ground);


 		

		
	

	},
	update: function() {
		
		for (var layer in this.layers) {
			game.physics.arcade.collide(players, this.layers[layer]);
		}

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