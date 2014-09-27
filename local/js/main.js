
var game = new Phaser.Game(1200, 860, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
 
function preload() {

	world.preload();	
	player.preload();
	
	world.preload();
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 2000;

	world.create();
	player.create();

	player.make();


	createServer();
}
 
function update() {
	player.update();
	//world.update();
}

function render () {
	world.render();
}
