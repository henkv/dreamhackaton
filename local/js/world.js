var world = {};
 
world.preload = function() {
	game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
	game.load.image('tiles', 'assets/AllGroundTiles.png');
	game.load.image('sky', "assets/Sky.png");	
}

var map;
var bg;
var layer;

world.create = function() {
	bg = game.add.sprite(0,0,"sky");

	map = game.add.tilemap('map');

	map.addTilesetImage("AllGroundTiles", "tiles");

	layer = map.createLayer(0);
	map.setCollisionBetween(0, 10);

	layer.debug = true;
	layer.resizeWorld();


}

world.update = function(){
	

}

