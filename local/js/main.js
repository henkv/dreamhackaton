var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;


var game = new Phaser.Game((h > w) ? h : w, (h > w) ? w : h, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

	world.preload();	
	player.preload();
	

}
 
function create() {

	//game.scaleMode = 2;
	//game.stage.ShowAll();
	//console.log(game);
	//game.scale.enterFullscreen();

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 2000;

	world.create();
	player.create();



	createServer();
}
 
function update() {
	player.update();
	//world.update();
}

function render () {}