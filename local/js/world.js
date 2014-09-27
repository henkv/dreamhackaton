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


		this.layers.pilars = this.map.createLayer("Pilars");
		this.layers.ground = this.map.createLayer("Ground");
		
		this.layers.ground.resizeWorld();
		this.layers.pilars.resizeWorld();



	}
};