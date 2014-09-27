var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var players;
 
function preload() {
	
	game.load.spritesheet('char', 'assets/Run.png',200,200,8);
	game.load.spritesheet('charLeft', 'assets/Run_left.png',200,200,8);
	
	world.preload();
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	players = game.add.group();
	//game.physics.setImpactEvents(true);
	//game.physics.arcade.collide('char', sprite2, collisionHandler, null, this);
	game.physics.arcade.gravity.y = 300;

	world.create();
	// var hej = new Player("AskiaSonghai");

	// hej.move();
}
 
function update() {
	game.physics.arcade.collide(players);
}

function makeId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
