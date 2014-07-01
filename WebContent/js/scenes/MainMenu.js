Scene.MainMenu = function(game) {
};
Scene.MainMenu.prototype = {
	create : function() {
		this.bg = this.add.sprite(0, 0, "mainMenuBg");
		this.bg.width = this.game.world.width;
		this.bg.height = this.game.world.height;
	}
};