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
        
        this.track01 = this.game.add.audio('track01', 0);
        this.track02 = this.game.add.audio('track02', 0);
        this.track03 = this.game.add.audio('track03', 0);
        
        this.game.mainMenuMusic = this.game.add.audio('track01', 1, true);
        this.game.creditsMusic = this.game.add.audio('track02', 1, true);
        this.game.gameplayMusic = this.game.add.audio('track03', 1, true);
        this.game.winSceneMusic = this.game.add.audio('track02', 1, true);
        this.game.loseSceneMusic = this.game.add.audio('track02', 1, true);
    },
    create : function() {
        this.track01.onPlay.add(this.track01PlayedOnce, this);
        this.track01.play();
    },
    
    track01PlayedOnce : function() {
        this.track01.stop();
        this.track02.onPlay.add(this.track02PlayedOnce, this);
        this.track02.play();
    },
    
    track02PlayedOnce : function() {
        this.track02.stop();
        this.track03.onPlay.add(this.track03PlayedOnce, this);
        this.track03.play();
    },
    
    track03PlayedOnce : function() {
        this.track03.stop();
        this.game.state.start('MainMenu');
    }
};