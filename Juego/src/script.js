var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('food', 'asset/pizza.png');
}

function create() {

}

function update() {
    initFood(100,100);
}

function initFood(x, y) {
        var f = new Food(game, x, y);
        return f;
}