var characters = {};

function Player(id){
	this.id = id;

	characters[this.id] = {};
	characters[this.id]["sprite"] = {};

 	characters[this.id]["sprite"] = game.add.sprite(0,0,'char');
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
