var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var players, platforms;
 
function preload() {
	
	game.load.spritesheet('char', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charLeft', 'assets/Run_left.png',200,200,8);
	
	world.preload();
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	createServer();
	//game.physics.setImpactEvents(true);
	//game.physics.arcade.collide('char', sprite2, collisionHandler, null, this);
	game.physics.arcade.gravity.y = 300;

	world.create();
	// var hej = new Player("AskiaSonghai");

	// hej.move();

	players = game.add.group();
}
 
function update() {
	game.physics.arcade.collide(players, platforms);
}
