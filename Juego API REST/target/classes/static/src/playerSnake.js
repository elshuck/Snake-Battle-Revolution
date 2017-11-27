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
    this.score = 0;
    this.scoreText = this.game.add.text(16, 16, 'score: ' + this.score, { fontSize: '32px', fill: '#FF0000' });
    this.name;
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/getNombre/0"
        }).done(function(data){
            this.name = data;
        });
    this.prototype = Object.create(Snake.prototype);
    /*this.prototype.incrementScore = function() {
        this.score++;
        this.game.count++;
        this.game.score.setText('score: ' + this.game.count);
}*/
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

