Game = function(game) {
    this.score = 0;
    this.scoreText;

    this.music;
    this.eatSound; 
}

Game.prototype = {
    preload: function() {
        //load assets
        this.game.load.image('snake','asset/circle.png');
        this.game.load.image('food', 'asset/pizza.png');
    	this.game.load.image('background', 'asset/tile.jpg');

        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.load.audio('mainTheme', 'asset/MainTheme.mp3');
        this.game.load.audio('eatSound', 'asset/EatSound.ogg');
        
    },

    create: function() {
        var width = this.game.width;
        var height = this.game.height;


        this.music = this.game.add.audio('mainTheme');
        this.music.loopFull();
        this.eatSound = this.game.add.audio('eatSound');

       

        //add tilesprite background
        var background = this.game.add.tileSprite(0, 0,width, this.game.world.height, 'background');

        var border = new Border(this.game);

        

        //initialize physics and groups
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.borderGroup = this.game.add.group();
        this.foodGroup = this.game.add.group();
        this.snakeHeadCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.foodCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.borderCollisionGroup = this.game.physics.p2.createCollisionGroup();

        //add food randomly
        for (var i = 0 ; i < 100 ; i++) {
            this.initFood(Util.randomInt(5, width-5), Util.randomInt(5, height-5));
        }

        this.game.snakes = [];

        //create player
        var snake = new PlayerSnake(this.game, 'snake', 400, 300);
        
        var snake2 = new PlayerSnake2(this.game, 'snake', 600, 500);

        //initialize snake groups and collision
        for (var i = 0 ; i < this.game.snakes.length ; i++) {
            var snake = this.game.snakes[i];            
            snake.head.body.setCollisionGroup(this.snakeHeadCollisionGroup);
            snake.head.body.collides([this.foodCollisionGroup]);
            
            //callback for when a snake is destroyed
            snake.addDestroyedCallback(this.snakeDestroyed, this);
        }
    },
    /**
     * Main update loop
     */
    update: function() {
        //update game components
        for (var i = this.game.snakes.length - 1 ; i >= 0 ; i--) {
            this.game.snakes[i].update();
        }
        for (var i = this.foodGroup.children.length - 1 ; i >= 0 ; i--) {
            var f = this.foodGroup.children[i];
            f.food.update();
        }

        this.scoreText = this.game.add.text(16, 16, 'score: ' + this.score, { fontSize: '32px', fill: '#FF0000' });
    },
    /**
     * Create a piece of food at a point
     * @param  {number} x x-coordinate
     * @param  {number} y y-coordinate
     * @return {Food}   food object created
     */
    initFood: function(x, y) {
        var f = new Food(this.game, x, y, this.score, this.scoreText);
        f.sprite.body.setCollisionGroup(this.foodCollisionGroup);
        this.foodGroup.add(f.sprite);
        f.sprite.body.collides([this.snakeHeadCollisionGroup]);
        return f;
    },
};
