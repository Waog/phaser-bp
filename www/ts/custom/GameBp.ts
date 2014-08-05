module GameBp {

    export class GameBp extends Phaser.Game {

        constructor() {

            super(640, 480, Phaser.AUTO, '');

            this.state.add('Bootloader', Bootloader);
            this.state.add('Preloader', Preloader);
            this.state.add('MainMenu', MainMenu);
            this.state.add('Credits', Credits);
            this.state.add('GameScene', GameScene);
            this.state.add('Win', Win);
            this.state.add('Lose', Lose);

            this.state.start('Bootloader');
        }
    }
} 