/**
 * Player of the core snake for controls
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
PlayerSnake2 = function(game, spriteKey, x, y) {
    Snake.call(this, game, spriteKey, x, y);
    

    this.upButton = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

    this.downButton = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    this.leftButton = this.game.input.keyboard.addKey(Phaser.Keyboard.A);

    this.rightButton = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
}

/**
 * Add functionality to the original snake update method so that the player
 * can control where this snake goes
 */
PlayerSnake2.prototype = Object.create(Snake.prototype);
PlayerSnake2.prototype.constructor = PlayerSnake2;

/**
 * Add functionality to the original snake update method so that the player
 * can control where this snake goes
 */
PlayerSnake2.prototype.tempUpdate = PlayerSnake2.prototype.update;
PlayerSnake2.prototype.update = function() {
    //allow arrow keys to be used
    if (this.leftButton.isDown && this.head.body.velocity.x != this.speed) {
        this.head.body.velocity.x = -this.speed;
        this.head.body.velocity.y = 0;
    }
    
    if (this.rightButton.isDown && -this.head.body.velocity.x != this.speed) {
        this.head.body.velocity.x = this.speed;
        this.head.body.velocity.y = 0;
    }

    if (this.downButton.isDown && this.head.body.velocity.y != this.speed) {
        this.head.body.velocity.x = 0;
        this.head.body.velocity.y = this.speed;
    }

    if (this.upButton.isDown && this.head.body.velocity.y != -this.speed) {
        this.head.body.velocity.x = 0;
        this.head.body.velocity.y = -this.speed;
    }
    //call the original snake update method
    this.tempUpdate();
}