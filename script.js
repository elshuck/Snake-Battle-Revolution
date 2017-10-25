var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var cursors;


function preload() {
	game.load.image('food', 'asset/pizza.png');
	game.load.image('snake', 'asset/circle.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	initFood();
	initSnake();
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	player.sprite.movimiento(player.sprite);
	game.physics.arcade.overlap(player.sprite, food.sprite, eatFood, null, this);
}

function initFood() {
	var rx = Math.floor((Math.random() * 800) + 1);
	var ry = Math.floor((Math.random() * 600) + 1);
	food = new Food(game, rx, ry);
	return food;
	
}

function initSnake() {
	var rx = Math.floor((Math.random() * 800) + 1);
	var ry = Math.floor((Math.random() * 600) + 1);
	player = new Snake(game, rx, ry);
	return player;
}

function eatFood(player,food) {
	food.kill();
	initFood();
}