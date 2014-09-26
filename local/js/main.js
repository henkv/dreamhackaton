var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {
	game.load.spritesheet('char', 'assets/Run.png',200,200,4);
	
	
}
 
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	var hej = new Player();

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


var characters = {};

function Player(){
	this.id = makeId();

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};

 	characters[this.id]["sprite"] = game.add.sprite(0,0,'char');
 	console.log(characters[this.id]["sprite"]);
	characters[this.id]["sprite"].animations.add('run', [3,2,0,1], 8, true);
}

Player.prototype.run = function(){
	characters[this.id]["sprite"].play("run");
}

Player.prototype.remove = function(){
	delete characters[this.id]["sprite"];
}

Player.prototype.getId = function(){
	return this.id;
}



//