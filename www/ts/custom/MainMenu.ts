module GameBp {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;


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

            this.logo = this.add.sprite(this.world.centerX, -200, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 100 }, 1000, Phaser.Easing.Elastic.Out, true, 2000);

            Utils.createButton(this, this.game, "Start", this.onStart, 100, 300);
            Utils.createButton(this, this.game, "Credits", this.onCredits, 400, 300);
        }


        onStart() {

//            this.game.clickSound.play();
            this.fadeOut(this.startGame, this);
        }

        
        onCredits() {
//            this.game.clickSound.play();
            this.game.state.start('Credits');
        }


        fadeOut(callback:Function, callbackContext:any) {

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