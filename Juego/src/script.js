Game = function(game)
{
	this.score = 0;
	this.scoreText;

	this.music;
	this.eatSound;
}

Game.prototype = {
	preload: function(){
		this.game.load.image('food', 'asset/pizza.png');
		this.game.load.image('snake', 'asset/circle.png');

		this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		this.game.load.audio('mainTheme', 'asset/MainTheme.mp3');
		this.game.load.audio('eatSound', 'asset/EatSound.ogg');
	},

	create: function(){

		var width = this.game.width;
    	var height = this.game.height;

		this.game.world.setBounds(-width, -height, width*2, height*2);
    	this.game.stage.backgroundColor = '#444';
    	 
    	//initialize physics and groups 
 		this.game.physics.startSystem(Phaser.Physics.P2JS);


		this.initFood();

    	//create player
    	var snake = new Snake(this.game,'snake', 100, 300);



    	

		this.game.scale.setResizeCallback(function () {
		if (this.food.sprite.position.x > this.game.width || this.food.sprite.position.y > this.game.height) {
			this.food.sprite.kill();
			initFood();
		}
		});


		this.music = this.game.add.audio('mainTheme');
		this.music.loopFull();
		this.eatSound = this.game.add.audio('eatSound');

		this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FF0000' });
		},

	update: function() {
    //update game components
    	for (var i = 0; i<this.game.snakes.length; i++) {
        	this.game.snakes[i].update();
    	}

    	//this.game.physics.arcade.overlap(this.game.snake, this.game.food, this.eatFood, null, this);
	},
	
	initFood: function() {
			var rx = Math.floor((Math.random() * this.game.width) + 1);
			var ry = Math.floor((Math.random() * this.game.height) + 1);
			var food = new Food(this.game, rx, ry);
			return food;
	},

	
 /*
	function eatFood(player, food) {
	eatSound.play();
	food.kill();
	initFood();

	 score += 10;
    scoreText.text = 'Score: ' + score;
}  
*/
};
