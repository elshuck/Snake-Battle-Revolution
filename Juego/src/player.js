PlayerSnake = function(game, spriteKey, x, y) {
    Snake.call(this, game, spriteKey, x, y);
    this.cursors = game.input.keyboard.createCursorKeys();

    //handle the space key so that the player's snake can speed up
    //var self = this;    
}

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