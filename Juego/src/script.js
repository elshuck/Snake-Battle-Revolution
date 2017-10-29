var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

var cursors;

var player;

var score = 0;
var scoreText;

var music;
var eatSound;

function preload() {
	game.load.image('food', 'asset/pizza.png');
	game.load.image('snake', 'asset/circle.png');

	game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

	game.load.audio('mainTheme', 'asset/MainTheme.mp3');
	game.load.audio('eatSound', 'asset/EatSound.ogg');
}

function create() {
	game.physics.startSystem(Phaser.Physics.P2JS);
	initFood();

	game.scale.setResizeCallback(function () {
		if (food.sprite.position.x > game.width || food.sprite.position.y > game.height) {
			food.sprite.kill();
			initFood();
		}
	});

	var snake = new Snake(this.game,'snake', 100, 300);
	cursors = game.input.keyboard.createCursorKeys();

	music = game.add.audio('mainTheme');
	music.loopFull();
	eatSound = game.add.audio('eatSound');

	scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FF0000' });
}

function update() {
	
}

function initFood() {
	var rx = Math.floor((Math.random() * 800) + 1);
	var ry = Math.floor((Math.random() * 600) + 1);
	food = new Food(game, rx, ry);
	return food;	
}


function eatFood(player, food) {
	eatSound.play();
	food.kill();
	initFood();

	 score += 10;
    scoreText.text = 'Score: ' + score;
}