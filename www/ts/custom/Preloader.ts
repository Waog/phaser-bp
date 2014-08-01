module GameBp {


    export class Preloader extends Phaser.State {

        preloadBg: Phaser.Sprite;
        preloadBar: Phaser.Sprite;



        preload() {

            // display the preload process
            this.preloadBg = this.add.sprite(0, 0, 'preloaderBg');
            this.preloadBg.width = this.game.world.width;
            this.preloadBg.height = this.game.world.height;

            this.preloadBar = this.add.sprite(this.game.world.centerX,
                this.game.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);

            // preload and configure global content
            this.game.stage.backgroundColor = '#ABCDEF';

            this.load.spritesheet('button',
                'assets/placeholder/spriteSheets/button.png', 300, 100);
            this.load.audio('click', Utils
                .getAudioFileArray('assets/placeholder/fx/blip'));

            this.load.audio('track01', Utils
                .getAudioFileArray('assets/placeholder/music/track01'));
            this.load.audio('track02', Utils
                .getAudioFileArray('assets/placeholder/music/track02'));
            this.load.audio('track03', Utils
                .getAudioFileArray('assets/placeholder/music/track03'));
        }


        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }


        startMainMenu() {

            this.game.state.start('MainMenu', true, false);
        }
    }
}