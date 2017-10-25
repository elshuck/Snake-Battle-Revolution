Snake = function (game, x, y) {
	this.game = game;
	this.sprite = game.add.sprite(x, y, 'snake');
	this.sprite.game.physics.arcade.enable(this.sprite);
	this.sprite.body.collideWorldBounds = true;
	this.sprite.body.velocity.x = 100;
	this.sprite.movimiento = function (player) {

		if (cursors.left.isDown && player.body.velocity.x != 100) {
			player.body.velocity.x = -100;
			player.body.velocity.y = 0;
		}
		if (cursors.right.isDown && player.body.velocity.x != -100) {
			player.body.velocity.x = 100;
			player.body.velocity.y = 0;
		}
		if (cursors.up.isDown && player.body.velocity.y != 100) {
			player.body.velocity.y = -100;
			player.body.velocity.x = 0;
		}
		if (cursors.down.isDown && player.body.velocity.y != -100) {
			player.body.velocity.y = 100;
			player.body.velocity.x = 0;
		}
	}
}
