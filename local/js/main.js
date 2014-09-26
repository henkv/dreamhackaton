var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {
	game.load.spritesheet('char', 'assets/Run.png',200,200,8);
	
	game.load.spritesheet('tileGround1', 'assets/GroundTile1.png');
	game.load.spritesheet('tileGround2', 'assets/GroundTile2.png');
	
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// var hej = new Player("AskiaSonghai");

	// hej.move();
}
 
function update() {
}

function makeId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
