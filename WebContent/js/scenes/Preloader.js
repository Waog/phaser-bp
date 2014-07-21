Scene.Preloader = function(game) {
};
Scene.Preloader.prototype = {
    preload : function() {
        // display the preload process
        this.preloadBg = this.add.sprite(0, 0, 'preloaderBg');
        this.preloadBg.width = this.game.world.width;
        this.preloadBg.height = this.game.world.height;
        this.preloadBar = this.add.sprite(this.game.world.centerX,
                this.game.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        // preload and configure global content
        this.game.stage.backgroundColor = '#123456';
        this.load.spritesheet('button',
                'assets/placeholder/spriteSheets/button.png', 300, 100);
        this.game.load.audio('click', utils
                .getAudioFileArray('assets/placeholder/fx/blip'));
        this.game.clickSound = this.game.add.audio('click');
        this.game.load.audio('track01', utils
                .getAudioFileArray('assets/placeholder/music/track01'));
        this.game.load.audio('track02', utils
                .getAudioFileArray('assets/placeholder/music/track02'));
        this.game.load.audio('track03', utils
                .getAudioFileArray('assets/placeholder/music/track03'));
        this.game.mainMenuMusic = this.game.add.audio('track01', 1, true);
        this.game.creditsMusic = this.game.add.audio('track02', 1, true);
        this.game.gameplayMusic = this.game.add.audio('track03', 1, true);
        this.game.winSceneMusic = this.game.add.audio('track02', 1, true);
        this.game.loseSceneMusic = this.game.add.audio('track02', 1, true);
    },
    create : function() {
        this.game.state.start('MainMenu');
    }
};