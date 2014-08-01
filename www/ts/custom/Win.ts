module GameBp {

    export class Win extends Phaser.State {
    
        bg:Phaser.Sprite;
        
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

            var textString = "WIN!";
            var textStyle = {
                font: "60px Arial",
                fill: "#ABCDEF",
                align: "center"
            };
            var text = this.game.add.text(this.game.world.centerX,
                this.game.world.centerY, textString, textStyle);
            text.anchor.set(0.5, 0.5);
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