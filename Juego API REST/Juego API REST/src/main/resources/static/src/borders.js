Border  = function(game) {
	this.game = game;
	this.canvas = this.game.add.graphics(0,0);
	this.width = game.width;
	this.height = game.height;

	this.top = this.drawRect(0xff5500, 0, 0, this.width, 15);
	this.bot = this.drawRect(0xff5500, 0, this.height-15, this.width, 15);
	this.left = this.drawRect(0xff5500, 0, 0, 15, this.height);
	this.right = this.drawRect(0xff5500, this.width, 0, -15, this.height);

	this.head = null;
    this.constraint = null;

}

Border.prototype = {
	drawRect: function(color, x, y, width, height){
		this.canvas.beginFill(color);
		this.canvas.drawRect(x, y ,width, height); // coordenada X, coordenada Y, ancho y alto
		this.canvas.endFill();
	},
};