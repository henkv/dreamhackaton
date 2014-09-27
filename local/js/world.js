var world = {
	bg: null,
	map: null,
	layers: {},
	preload: function() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
		game.load.image('AllGroundTiles', 'assets/AllGroundTiles.png');
		
		game.load.image('Cloud1', 'assets/Cloud1.png');
		game.load.image('Cloud2', 'assets/Cloud2.png');
		game.load.image('Cloud3', 'assets/Cloud3.png');
		game.load.image('Cloud4', 'assets/Cloud4.png');

		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");

		this.map = game.add.tilemap("map");
		this.map.addTilesetImage("AllGroundTiles", "AllGroundTiles");

		this.map.setCollisionBetween(1,10);

		//this.layers.pilars3 = this.map.createLayer("plat3");
	//	this.layers.pilars2 = this.map.createLayer("plat2");
	//	this.layers.pilars = this.map.createLayer("plat1");
		this.layers.ground = this.map.createLayer("ground");

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
 		game.physics.arcade.enable(this.layers.ground, Phaser.Physics.ARCADE, true);


 		console.log(this.map.collideIndexes);
 		//layers.add(this.layers.ground);

		
	

	},
	update: function() {
		
	

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
	},

	clouds: function() {

		// ta tiden, få när det sista molnet skapads och vänta en viss tid 
		var image = game.add.sprite(0, 0, 'Cloud1');
		game.physics.enable(image, Phaser.Physics.ARCADE);
		image.body.velocity.x = 100;

		if( () ) {

		}

	}


};