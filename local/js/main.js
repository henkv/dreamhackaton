var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {
	game.load.spritesheet('char', 'assets/Run.png',200,200,4);
	
	
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	var hej = new Player("AskiaSonghai");

	hej.run();
	hej.remove();
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
