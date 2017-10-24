var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var cursors;

var player;

function preload() {
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
}

function initFood(x, y) {
        var f = new Food(game, x, y);
        return f;
}