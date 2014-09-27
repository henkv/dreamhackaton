
var game = new Phaser.Game(2256, 1300, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
 
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

	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

	var text = "IP: 77.80.130.53";
    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };

    var t = game.add.text(game.world.centerX, 0, text, style);

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