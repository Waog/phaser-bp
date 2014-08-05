module GameBp {

    export class Win extends Phaser.State {

        bg: Phaser.Sprite;

        preload() {
            this.load.image('winBg',
                'assets/placeholder/img/squareGradientTopDownGreen.png');
            //            this.game.winSceneMusic.play();
        }

        create() {
            this.bg = this.add.sprite(0, 0, "winBg");
            this.bg.width = this.game.world.width;
            this.bg.height = this.game.world.height;
            this.bg.inputEnabled = true;
            this.bg.events.onInputDown.add(this.onInteraction, this);

            var text: Phaser.BitmapText = this.game.add.bitmapText(0, 0, 'bmFont', 'Win!', 80);
            text.align = 'center';
            text.x = this.game.world.centerX - text.width / 2;
            text.y = this.game.world.centerY - text.height / 2;
        }

        onInteraction() {
            //            this.game.clickSound.play();
            this.game.state.start('MainMenu');
        }

        shutdown() {
            //            this.game.winSceneMusic.stop();
        }
    }
}