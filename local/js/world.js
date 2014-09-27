var world = {
	bg: null,
	map: null,
	layers: {},
	preload: function() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
		game.load.image('GroundTileA', 'assets/GroundTileA.png');
		game.load.image('GroundTileB', 'assets/GroundTileB.png');
		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");

		
		
		this.map = game.add.tilemap("map");
		this.map.addTilesetImage("GroundTileA", "GroundTileA");
		this.map.addTilesetImage("GroundTileB", "GroundTileB");

		this.layers.pilars = this.map.createLayer("Pilars");
		this.layers.ground = this.map.createLayer("Ground");
		
		this.layers.ground.resizeWorld();
		this.layers.pilars.resizeWorld();



	}
};