Scene.GameScene = function(game) {
};
Scene.GameScene.prototype = {
    preload : function() {
        this.load.image('gameBg', 'assets/placeholder/img/squareBlue.png');
        this.load.image('enemy', 'assets/placeholder/img/headBlack.png');
        this.load.image('friend', 'assets/placeholder/img/headWhite.png');

        this.game.load.audio('hit', utils
                .getAudioFileArray('assets/placeholder/fx/hit'));
        this.hitSound = this.game.add.audio('hit');
    },

    create : function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bg = this.add.sprite(0, 0, "gameBg");
        this.bg.width = this.game.world.width;
        this.bg.height = this.game.world.height;

        var tutorialString = "shoot the black guy,\ndon't shot the white guy.";
        this.game.add.text(10, 10, tutorialString);

        enemy = this.add.sprite(100, 100, "enemy");
        this.addPhysicsMovmentAndColision(enemy);
        this.addInputHandler(enemy, this.onWin);

        friend = this.add.sprite(100, 100, "friend");
        this.addPhysicsMovmentAndColision(friend);
        this.addInputHandler(friend, this.onLose);
    },

    onWin : function() {
        this.hitSound.play();
        this.game.state.start('Win');
    },

    onLose : function() {
        this.hitSound.play();
        this.game.state.start('Lose');
    },

    addPhysicsMovmentAndColision : function(sprite) {
        this.game.physics.arcade.enable(sprite);
        sprite.body.velocity.x = 50 + Math.random() * 50;
        sprite.body.velocity.y = 50 + Math.random() * 50;
        sprite.body.bounce.x = 1;
        sprite.body.bounce.y = 1;
        sprite.body.collideWorldBounds = true;
    },

    addInputHandler : function(sprite, callback) {
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(callback, this);
    }
};