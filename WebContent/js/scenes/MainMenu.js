Scene.MainMenu = function(game) {
};
Scene.MainMenu.prototype = {
    preload : function() {
        this.load.image('mainMenuBg',
                'assets/placeholder/img/squareGradientTopDownGrey.png');
        this.game.mainMenuMusic.play();
    },

    create : function() {
        this.bg = this.add.sprite(0, 0, "mainMenuBg");
        this.bg.width = this.game.world.width;
        this.bg.height = this.game.world.height;

        utils.createButton(this, this.game, "Start", this.onStart, 100, 300);
        utils.createButton(this, this.game, "Credits", this.onCredits, 400, 300);

    },

    onStart : function() {
        this.game.clickSound.play();
        this.game.state.start('GameScene');
    },

    onCredits : function() {
        this.game.clickSound.play();
        this.game.state.start('Credits');
    },
    
    shutdown : function() {
        this.game.mainMenuMusic.stop();
    }
};