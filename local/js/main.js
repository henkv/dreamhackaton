var game = new Phaser.Game(2256, 1300, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
 
function preload() {

	world.preload();	
	player.preload();
	
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 2000;

	world.create();
	player.create();

	player.make("asd");

	createServer();

	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.onDown.add(gofull, this);
}
 
function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function update() {
	player.update();
	//world.update();
}

function render () {}