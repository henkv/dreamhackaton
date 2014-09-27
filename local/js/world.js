var world = {};
 
world.preload = function() {
	game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.CSV)
	game.load.image('tiles', 'assets/AllGroundTiles.png');
	game.load.image('sky', "assets/Sky.png");	
}

var map;
var bg;
var layer;
var cursors;
var player;

world.create = function() {
	bg = game.add.sprite(0,0,"sky");

	map = game.add.tilemap('map', 22, 8);

	map.addTilesetImage("AllGroundTiles", "tiles");

	layer = map.createLayer(0);

	layer.resizeWorld();

	map.setCollisionBetween(0, 10);

}

world.update = function(){
	

}

