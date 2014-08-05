module GameBp {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.BitmapText;


        preload() {

            this.load.image('mainMenuBg',
                'assets/placeholder/img/squareGradientTopDownGrey.png');
            this.load.image('logo',
                'assets/placeholder/img/starGreen.png');
            //            this.game.mainMenuMusic.play();
        }


        create() {

            this.background = this.add.sprite(0, 0, 'mainMenuBg');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;
            this.background.alpha = 0;

            this.logo = this.add.bitmapText(this.world.centerX, -200, 'bmFont', 'phaser-bp', 120);
            this.logo.x = this.world.centerX - this.logo.width / 2;

            this.add.tween(this.background).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 70 }, 1000, Phaser.Easing.Elastic.Out, true, 2000);

            var startBtn: DecoratedButton = new DecoratedButton("Start", this.game, this.onStart, this, 65, this.game.width / 5, 4 * this.game.height / 5);
            this.add.existing(startBtn);
            var creditsBtn: DecoratedButton = new DecoratedButton("Credtis", this.game, this.onCredits, this, 40, 4 * this.game.width / 5, 4 * this.game.height / 5);
            this.add.existing(creditsBtn);
        }


        onStart() {

            //            this.game.clickSound.play();
            this.fadeOut(this.startGame, this);
        }


        onCredits() {
            //            this.game.clickSound.play();
            this.game.state.start('Credits');
        }


        fadeOut(callback: Function, callbackContext: any) {

            this.add.tween(this.background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(callback, callbackContext);
        }


        startGame() {

            this.game.state.start('GameScene');
        }


        startCredits() {

            this.game.state.start('Credits');
        }


        shutdown() {
            //            this.game.mainMenuMusic.stop();
        }
    }
}