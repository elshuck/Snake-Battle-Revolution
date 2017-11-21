/**
 * Player of the core snake for controls
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
PlayerSnake = function(game, spriteKey, x, y) {
    Snake.call(this, game, spriteKey, x, y);
    this.cursors = game.input.keyboard.createCursorKeys();
}

/**
 * Add functionality to the original snake update method so that the player
 * can control where this snake goes
 */
PlayerSnake.prototype = Object.create(Snake.prototype);
PlayerSnake.prototype.constructor = PlayerSnake;

/**
 * Add functionality to the original snake update method so that the player
 * can control where this snake goes
 */
PlayerSnake.prototype.tempUpdate = PlayerSnake.prototype.update;
PlayerSnake.prototype.update = function() {
    //allow arrow keys to be used
    if (this.cursors.left.isDown && this.head.body.velocity.x != this.speed) {
        this.head.body.velocity.x = -this.speed;
        this.head.body.velocity.y = 0;
    }
    
    if (this.cursors.right.isDown && -this.head.body.velocity.x != this.speed) {
        this.head.body.velocity.x = this.speed;
        this.head.body.velocity.y = 0;
    }

    if (this.cursors.up.isDown && this.head.body.velocity.y != this.speed) {
        this.head.body.velocity.x = 0;
        this.head.body.velocity.y = -this.speed;
    }

    if (this.cursors.down.isDown && this.head.body.velocity.y != -this.speed) {
        this.head.body.velocity.x = 0;
        this.head.body.velocity.y = this.speed;
    }
    //call the original snake update method
    this.tempUpdate();
}
