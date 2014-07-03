Scene.Credits = function(game) {
};
Scene.Credits.prototype = {
	preload : function() {
		this.load.image('creditsBg',
				'assets/placeholder/img/squareGradientTopDownGrey.png');
	},

	create : function() {
		this.bg = this.add.sprite(0, 0, "creditsBg");
		this.bg.width = this.game.world.width;
		this.bg.height = this.game.world.height;

		createButton(this, this.game, "Back", this.onBack,
				this.game.world.centerX, 300);
	},

	onBack : function() {
		this.game.state.start('MainMenu');
	},
};