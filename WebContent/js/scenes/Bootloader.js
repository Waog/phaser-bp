/**
 * Basic boat loading is done here. Since no assets are loaded before this
 * scene, no assets should be displayed here. Just do the stuff absolutly
 * nesseccary to display the preloader. After boot loading is finished, the
 * scene 'Preload' will be started.
 * 
 * Boot loading includes two things:
 * 
 * 1. Initializing a global 'Scene' variable, which later contains all scenes.
 * 
 * 2. Loading of the first assets, which are required to display the next scene
 * 'preloader', e.g. a loading bar, a background and a short background music
 * clip.
 * 
 */

// initialize a global Scene variable containing all Scenes (i.e. phaser
// states).
var Scene = {};

// initialize a boot loader object
Scene.Bootloader = function(game) {
};
Scene.Bootloader.prototype = {
	preload : function() {
		this.load.image('preloaderBg',
				'assets/placeholder/img/squareGradientTopDownBlue.png');
		this.load.image('preloaderBar',
				'assets/placeholder/img/squareGreen3D.png');
	},
	create : function() {
		this.game.state.start('Preloader');
	}
};