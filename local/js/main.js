var game = new Phaser.Game(1200, 860, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
var player, layers;
 
function preload() {
	
	game.load.spritesheet('charRunight', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charRunLeft', 'assets/Run_left.png',200,200,8);
	game.load.spritesheet('charIdleLeft', 'assets/Idle.png',200,200,4);
	
	world.preload();
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 2000;

	player = makePlayer();
	createServer();

	world.create();

}
 
function update() {
	game.physics.arcade.collide(player, layer);	
	// world.update();
}

function render () {
	world.render();
}
