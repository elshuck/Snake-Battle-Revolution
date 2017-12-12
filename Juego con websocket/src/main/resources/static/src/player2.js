/**
 * Player of the core snake for controls
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
PlayerSnake2 = function(game, spriteKey, x, y) {
    Snake.call(this, game, spriteKey, x, y);
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

    //call the original snake update method
    this.tempUpdate();
}
