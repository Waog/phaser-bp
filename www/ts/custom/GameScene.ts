module GameBp {

    export class GameScene extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        hitSound: Phaser.Sound;

        preload() {

            this.load.image('gameBg', 'assets/placeholder/img/squareBlue.png');
            this.load.image('enemy', 'assets/placeholder/img/headBlack.png');
            this.load.image('friend', 'assets/placeholder/img/headWhite.png');
            this.load.audio('hit', Utils
                .getAudioFileArray('assets/placeholder/fx/hit'));


//            this.game.gameplayMusic.play();
        }


        create() {
            this.hitSound = this.game.add.audio('hit');

//            this.music = this.add.audio('music', 1, false);
//            this.music.play();

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.add.sprite(0, 0, 'gameBg');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            var tutorialString = "shoot the black guy,\ndon't shot the white guy.";
            this.game.add.bitmapText(10, 10, 'bmFont', tutorialString, 50);

            var enemy = this.add.sprite(100, 100, "enemy");
            this.addPhysicsMovmentAndColision(enemy);
            this.addInputHandler(enemy, this.onWin);

            var friend = this.add.sprite(100, 100, "friend");
            this.addPhysicsMovmentAndColision(friend);
            this.addInputHandler(friend, this.onLose);
        }


        addPhysicsMovmentAndColision(sprite:Phaser.Sprite) {

            this.game.physics.arcade.enable(sprite);
            sprite.body.velocity.x = 50 + Math.random() * 50;
            sprite.body.velocity.y = 50 + Math.random() * 50;
            sprite.body.bounce.x = 1;
            sprite.body.bounce.y = 1;
            sprite.body.collideWorldBounds = true;
        }


        addInputHandler(sprite:Phaser.Sprite, callback:Function) {

            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(callback, this);
        }


        onWin() {
        
            this.hitSound.play();
            this.game.state.start('Win');
        }

        
        onLose() {
        
            this.hitSound.play();
            this.game.state.start('Lose');
        }


        shutdown() {
//            this.game.gameplayMusic.stop();
        }

    }

} 