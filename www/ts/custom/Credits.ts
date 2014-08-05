module GameBp {
    var creditsString = "We thank anyone.\n\n"
        + "This game is based on\n"
        + "*phaser boiler plate code*.\n"
        + "Check out\n"
        + "https://github.com/Waog/phaser-bp"


    export class Credits extends Phaser.State {

        bg: Phaser.Sprite;

        preload() {
            this.load.image('creditsBg',
                'assets/placeholder/img/squareGradientTopDownBlue.png');
            //            this.game.creditsMus            
        }

        create() {
            this.bg = this.add.sprite(0, 0, "creditsBg");
            this.bg.width = this.game.world.width;
            this.bg.height = this.game.world.height;

            var text: Phaser.BitmapText = this.game.add.bitmapText(0, 0,
                'bmFont', creditsString);
            text.align = 'center';
            text.x = (this.game.world.width - text.width) / 2;
            text.y = 20;

            var backBtn: DecoratedButton = new DecoratedButton("Back", this.game, this.onBack, this);
            backBtn.y = this.world.height - backBtn.height - 20; 
            this.add.existing(backBtn);
        }

        onBack() {
            //            this.game.clickSound.play();
            this.game.state.start('MainMenu');
        }

        shutdown() {
            //            this.game.creditsMusic.stop();
        }
    };
}