Scene.MainMenu = function(game) {
};
Scene.MainMenu.prototype = {
	preload : function() {
		this.load.image('mainMenuBg',
				'assets/placeholder/img/squareGradientTopDownRed.png');
		this.load.spritesheet('button',
				'assets/placeholder/spriteSheets/button.png', 300, 100);
	},

	create : function() {
		this.bg = this.add.sprite(0, 0, "mainMenuBg");
		this.bg.width = this.game.world.width;
		this.bg.height = this.game.world.height;

		this.createButton("Start", this.actionOnStart, 300, 300);
		this.createButton("Credits", this.actionOnCredits, 600, 300);
	},

	createButton : function(textString, callback, x, y) {
		button = this.game.add.button(0, 0, 'button', callback,
				this, 2, 1, 0);
		button.width = 35 * textString.length;
		button.height = 100;
		button.x = x;
		button.y = y;
		button.anchor.setTo(0.5, 0.5);
		
		var textStyle = {
			font : "65px Arial",
			fill : "#123456",
			align : "center"
		};
		var text = this.game.add
				.text(button.x, button.y, textString, textStyle);
		text.anchor.setTo(0.5, 0.5);
	},

	actionOnStart : function() {
		console.log('TODO: switch to game scene');
	},
	
	actionOnCredits : function() {
		console.log('TODO: switch to credits scene');
	}
};