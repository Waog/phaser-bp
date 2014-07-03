Scene.MainMenu = function(game) {
};
Scene.MainMenu.prototype = {
	preload : function() {
		this.load.image('mainMenuBg',
				'assets/placeholder/img/squareGradientTopDownRed.png');
	},

	create : function() {
		this.bg = this.add.sprite(0, 0, "mainMenuBg");
		this.bg.width = this.game.world.width;
		this.bg.height = this.game.world.height;

		createButton(this, this.game, "Start", this.onStart, 300, 300);
		createButton(this, this.game, "Credits", this.onCredits, 600, 300);
	},

	onStart : function() {
		console.log('TODO: switch to game scene');
	},

	onCredits : function() {
		this.game.state.start('Credits');
	}
};