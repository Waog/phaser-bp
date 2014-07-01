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
		this.load.image('mainMenuBg',
				'assets/placeholder/img/squareGradientTopDownRed.png');
	},
	create : function() {
		this.game.state.start('MainMenu');
	}
};