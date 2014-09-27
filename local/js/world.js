var world = {};
 
world.preload = function() {
	game.load.tilemap("map","assets/arena.json", null, Phaser.Tilemap.TILED_JSON)
	game.load.image('tiles', 'assets/AllGroundTiles.png');
	game.load.image('sky', "assets/Sky.png");	


}

var map;
var tileset;
var bg;
var layer = {};

world.create = function() {
	bg = game.add.sprite(0,0,"sky");

	map = game.add.tilemap('map');

	map.addTilesetImage("AllGroundTiles", "tiles");

	map.setCollisionBetween(0, 10);

	layer.pilars3 =map.createLayer("plat3");
	layer.pilars2 =map.createLayer("plat2");
	layer.pilars = map.createLayer("plat1");
	layer.ground = map.createLayer("ground");

	//layer = map.createLayer(0);
	map.setCollisionBetween(0, 10);
	//for(var lay in layer)
	//	layer[lay].debug = true;
	
	layer.ground.resizeWorld();

}

world.update = function(){
	

}

world.render = function() {
	//game.debug.body(map);
}

