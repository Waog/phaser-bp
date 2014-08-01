Scene.Win = function(game) {
};
Scene.Win.prototype = {
    preload : function() {
        this.load.image('winBg',
                'assets/placeholder/img/squareGradientTopDownGreen.png');
        this.game.winSceneMusic.play();
    },

    create : function() {
        this.bg = this.add.sprite(0, 0, "winBg");
        this.bg.width = this.game.world.width;
        this.bg.height = this.game.world.height;
        this.bg.inputEnabled = true;
        this.bg.events.onInputDown.add(this.onInteraction, this);

        var textString = "WIN!";
        var textStyle = {
            font : "60px Arial",
            fill : "#ABCDEF",
            align : "center"
        };
        var text = this.game.add.text(this.game.world.centerX,
                this.game.world.centerY, textString, textStyle);
        text.anchor.setTo(0.5, 0.5);
    },

    onInteraction : function() {
        this.game.clickSound.play();
        this.game.state.start('MainMenu');
    },
    
    shutdown : function() {
        this.game.winSceneMusic.stop();
    }
};