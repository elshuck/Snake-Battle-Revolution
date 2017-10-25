var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var cursors;


var cursors;

var player;

function preload() {
<<<<<<< HEAD
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
=======
    game.load.image('food', 'asset/pizza.png');
    game.load.image('snek', 'asset/snek.jpg', 32, 48);
}

function create() {

player = game.add.sprite(32, 150, 'snek');
player.scale.setTo(0.2, 0.2);
game.physics.arcade.enable(player);
player.body.collideWorldBounds = true;
player.body.velocity.x=50;
cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    initFood(100,100);



//movimientos de la serpiente
     if(cursors.left.isDown && player.body.velocity.x !=50)
    {player.body.velocity.x =-50;
     player.body.velocity.y= 0;   
        
    }
    if(cursors.right.isDown && player.body.velocity.x !=-50)
    {player.body.velocity.x= 50;
    player.body.velocity.y= 0;
    }
    if(cursors.up.isDown && player.body.velocity.y !=50)
    {player.body.velocity.y= -50;
    player.body.velocity.x= 0;
    }
    if(cursors.down.isDown && player.body.velocity.y !=-50)
    {player.body.velocity.y= 50;
     player.body.velocity.x= 0;  
}
>>>>>>> 34208c622f6e135a96fce42019783fc5d3552408
}

function eatFood(player,food) {
	food.kill();
	initFood();
}