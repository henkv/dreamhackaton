var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
	
	function preload() {
		game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.CSV)
		game.load.image('tiles', 'assets/AllGroundTiles.png');
		game.load.image('sky', "assets/Sky.png");	
	}

	var map;
	var bg;
	var layer;
	var cursors;
	var player;

	function create() {
		bg = game.add.sprite(0,0,"sky");

		map = game.add.tilemap('map', 22, 8);

		this.map.addTilesetImage("tiles");

		layer = map.createLayer(0);

		layer.resizeWorld();

		map.setCollisionBetween(0, 10);

	}

	function update() {
		
	
	}

