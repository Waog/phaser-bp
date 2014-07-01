// ########################################################
// #### replace this code for example by code          ####
// #### from http://gamemechanicexplorer.com/          ####
// #### Dont forget to replace the asset pathes.       ####
// ########################################################

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload : preload,
	create : create
});

function preload() {
	game.load.image('star', 'assets/placeholder/img/starBlue.png');
}

function create() {
	var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'star');
	logo.anchor.setTo(0.5, 0.5);
}