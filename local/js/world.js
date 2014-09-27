var world = {
	bg: null,
	map: null,
	layers: {},
	preload: function() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
		game.load.image('AllGroundTiles', 'assets/AllGroundTiles.png');
		
		game.load.image('sky', "assets/Sky.png");	
	},
	create: function() {
		this.bg = game.add.sprite(0,0,"sky");

		
		
		this.map = game.add.tilemap("map");
		this.map.addTilesetImage("AllGroundTiles", "AllGroundTiles");

		this.layers.pilars3 = this.map.createLayer("Pilars3");
		this.layers.pilars2 = this.map.createLayer("Pilars2");
		this.layers.pilars = this.map.createLayer("Pilars");
		this.layers.ground = this.map.createLayer("Ground");
		
		this.layers.ground.resizeWorld();



	}
};