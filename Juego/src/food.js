Food = function(game, x, y) {
    this.game = game;
    this.sprite = this.game.add.sprite(x, y, 'food');
    this.sprite.anchor.setTo(0.5);
    this.sprite.scale.setTo(0.5,0.5);
}
