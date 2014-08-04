window.onload = function () {
    var game = new GameBp.GameBp();
};
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameBp;
(function (GameBp) {
    var Bootloader = (function (_super) {
        __extends(Bootloader, _super);
        function Bootloader() {
            _super.apply(this, arguments);
        }
        Bootloader.prototype.preload = function () {
            this.load.image('preloaderBg', 'assets/placeholder/img/squareGradientTopDownBlue.png');
            this.load.image('preloaderBar', 'assets/placeholder/img/squareGreen3D.png');
        };

        Bootloader.prototype.create = function () {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                // If you have any desktop specific settings, they can go in here
                // this.stage.scale.pageAlignHorizontally = true;
            } else {
                // Same goes for mobile settings.
            }

            this.game.state.start('Preloader', true, false);
        };
        return Bootloader;
    })(Phaser.State);
    GameBp.Bootloader = Bootloader;
})(GameBp || (GameBp = {}));
var GameBp;
(function (GameBp) {
    var creditsString = "We thank anyone. This game was done by us.\n\n" + "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," + "sed diam nonumy eirmod tempor invidunt ut labore et dolore " + "magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" + " justo duo dolores et ea rebum. Stet clita kasd gubergren, no" + " sea takimata sanctus est Lorem ipsum dolor sit amet.";

    var Credits = (function (_super) {
        __extends(Credits, _super);
        function Credits() {
            _super.apply(this, arguments);
        }
        Credits.prototype.preload = function () {
            this.load.image('creditsBg', 'assets/placeholder/img/squareGradientTopDownBlue.png');
            //            this.game.creditsMusic.play();
        };

        Credits.prototype.create = function () {
            this.bg = this.add.sprite(0, 0, "creditsBg");
            this.bg.width = this.game.world.width;
            this.bg.height = this.game.world.height;

            var textStyle = {
                font: "25px Arial",
                fill: "#ABCDEF",
                align: "center"
            };
            var PADDING = 20;
            var text = this.game.add.text(this.game.world.centerX, PADDING, creditsString, textStyle);
            text.wordWrap = true;
            text.wordWrapWidth = this.game.world.width - 2 * PADDING;
            text.anchor.set(0.5, 0);

            Utils.createButton(this, this.game, "Back", this.onBack, this.game.world.centerX, 300);
        };

        Credits.prototype.onBack = function () {
            //            this.game.clickSound.play();
            this.game.state.start('MainMenu');
        };

        Credits.prototype.shutdown = function () {
            //            this.game.creditsMusic.stop();
        };
        return Credits;
    })(Phaser.State);
    GameBp.Credits = Credits;
    ;
})(GameBp || (GameBp = {}));
var GameBp;
(function (_GameBp) {
    var GameBp = (function (_super) {
        __extends(GameBp, _super);
        function GameBp() {
            _super.call(this, 640, 480, Phaser.AUTO, 'game');

            this.state.add('Bootloader', _GameBp.Bootloader);
            this.state.add('Preloader', _GameBp.Preloader);
            this.state.add('MainMenu', _GameBp.MainMenu);
            this.state.add('Credits', _GameBp.Credits);
            this.state.add('GameScene', _GameBp.GameScene);
            this.state.add('Win', _GameBp.Win);
            this.state.add('Lose', _GameBp.Lose);

            this.state.start('Bootloader');
        }
        return GameBp;
    })(Phaser.Game);
    _GameBp.GameBp = GameBp;
})(GameBp || (GameBp = {}));
var GameBp;
(function (GameBp) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            _super.apply(this, arguments);
        }
        GameScene.prototype.preload = function () {
            this.load.image('gameBg', 'assets/placeholder/img/squareBlue.png');
            this.load.image('enemy', 'assets/placeholder/img/headBlack.png');
            this.load.image('friend', 'assets/placeholder/img/headWhite.png');
            this.load.audio('hit', Utils.getAudioFileArray('assets/placeholder/fx/hit'));
            //            this.game.gameplayMusic.play();
        };

        GameScene.prototype.create = function () {
            this.hitSound = this.game.add.audio('hit');

            //            this.music = this.add.audio('music', 1, false);
            //            this.music.play();
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.add.sprite(0, 0, 'gameBg');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            var tutorialString = "shoot the black guy,\ndon't shot the white guy.";
            this.game.add.text(10, 10, tutorialString, undefined);

            var enemy = this.add.sprite(100, 100, "enemy");
            this.addPhysicsMovmentAndColision(enemy);
            this.addInputHandler(enemy, this.onWin);

            var friend = this.add.sprite(100, 100, "friend");
            this.addPhysicsMovmentAndColision(friend);
            this.addInputHandler(friend, this.onLose);
        };

        GameScene.prototype.addPhysicsMovmentAndColision = function (sprite) {
            this.game.physics.arcade.enable(sprite);
            sprite.body.velocity.x = 50 + Math.random() * 50;
            sprite.body.velocity.y = 50 + Math.random() * 50;
            sprite.body.bounce.x = 1;
            sprite.body.bounce.y = 1;
            sprite.body.collideWorldBounds = true;
        };

        GameScene.prototype.addInputHandler = function (sprite, callback) {
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(callback, this);
        };

        GameScene.prototype.onWin = function () {
            this.hitSound.play();
            this.game.state.start('Win');
        };

        GameScene.prototype.onLose = function () {
            this.hitSound.play();
            this.game.state.start('Lose');
        };

        GameScene.prototype.shutdown = function () {
            //            this.game.gameplayMusic.stop();
        };
        return GameScene;
    })(Phaser.State);
    GameBp.GameScene = GameScene;
})(GameBp || (GameBp = {}));
var GameBp;
(function (GameBp) {
    var Lose = (function (_super) {
        __extends(Lose, _super);
        function Lose() {
            _super.apply(this, arguments);
        }
        Lose.prototype.preload = function () {
            this.load.image('loseBg', 'assets/placeholder/img/squareGradientTopDownRed.png');
            //            this.game.loseSceneMusic.play();
        };

        Lose.prototype.create = function () {
            this.bg = this.add.sprite(0, 0, "loseBg");
            this.bg.width = this.game.world.width;
            this.bg.height = this.game.world.height;
            this.bg.inputEnabled = true;
            this.bg.events.onInputDown.add(this.onInteraction, this);

            var textString = "Game\nOver!";
            var textStyle = {
                font: "60px Arial",
                fill: "#ABCDEF",
                align: "center"
            };
            var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, textString, textStyle);
            text.anchor.set(0.5, 0.5);
        };

        Lose.prototype.onInteraction = function () {
            //            this.game.clickSound.play();
            this.game.state.start('MainMenu');
        };

        Lose.prototype.shutdown = function () {
            //            this.game.loseSceneMusic.stop();
        };
        return Lose;
    })(Phaser.State);
    GameBp.Lose = Lose;
    ;
})(GameBp || (GameBp = {}));
var GameBp;
(function (GameBp) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.preload = function () {
            this.load.image('mainMenuBg', 'assets/placeholder/img/squareGradientTopDownGrey.png');
            this.load.image('logo', 'assets/placeholder/img/starGreen.png');
            //            this.game.mainMenuMusic.play();
        };

        MainMenu.prototype.create = function () {
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
        };

        MainMenu.prototype.onStart = function () {
            //            this.game.clickSound.play();
            this.fadeOut(this.startGame, this);
        };

        MainMenu.prototype.onCredits = function () {
            //            this.game.clickSound.play();
            this.game.state.start('Credits');
        };

        MainMenu.prototype.fadeOut = function (callback, callbackContext) {
            this.add.tween(this.background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(callback, callbackContext);
        };

        MainMenu.prototype.startGame = function () {
            this.game.state.start('GameScene');
        };

        MainMenu.prototype.startCredits = function () {
            this.game.state.start('Credits');
        };

        MainMenu.prototype.shutdown = function () {
            //            this.game.mainMenuMusic.stop();
        };
        return MainMenu;
    })(Phaser.State);
    GameBp.MainMenu = MainMenu;
})(GameBp || (GameBp = {}));
var GameBp;
(function (GameBp) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            // display the preload process
            this.preloadBg = this.add.sprite(0, 0, 'preloaderBg');
            this.preloadBg.width = this.game.world.width;
            this.preloadBg.height = this.game.world.height;

            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);

            // preload and configure global content
            this.game.stage.backgroundColor = '#ABCDEF';

            this.load.spritesheet('button', 'assets/placeholder/spriteSheets/button.png', 300, 100);
            this.load.audio('click', Utils.getAudioFileArray('assets/placeholder/fx/blip'));

            this.load.audio('track01', Utils.getAudioFileArray('assets/placeholder/music/track01'));
            this.load.audio('track02', Utils.getAudioFileArray('assets/placeholder/music/track02'));
            this.load.audio('track03', Utils.getAudioFileArray('assets/placeholder/music/track03'));
        };

        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    GameBp.Preloader = Preloader;
})(GameBp || (GameBp = {}));
var Utils;
(function (Utils) {
    function createButton(callbackContext, game, textString, callback, x, y) {
        var button = game.add.button(0, 0, 'button', callback, callbackContext, 2, 1, 0);
        button.width = 35 * textString.length;
        button.height = 100;
        button.x = x;
        button.y = y;
        button.anchor.setTo(0.5, 0.5);

        var textStyle = {
            font: "65px Arial",
            fill: "#123456",
            align: "center"
        };
        var text = game.add.text(button.x, button.y, textString, textStyle);
        text.anchor.set(0.5, 0.5);
    }
    Utils.createButton = createButton;
    ;

    function getAudioFileArray(fileNameWithoutExtention) {
        return [
            fileNameWithoutExtention + '.mp3',
            fileNameWithoutExtention + '.ogg',
            fileNameWithoutExtention + '.m4a'];
    }
    Utils.getAudioFileArray = getAudioFileArray;
    ;
})(Utils || (Utils = {}));
var GameBp;
(function (GameBp) {
    var Win = (function (_super) {
        __extends(Win, _super);
        function Win() {
            _super.apply(this, arguments);
        }
        Win.prototype.preload = function () {
            this.load.image('winBg', 'assets/placeholder/img/squareGradientTopDownGreen.png');
            //            this.game.winSceneMusic.play();
        };

        Win.prototype.create = function () {
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
            var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, textString, textStyle);
            text.anchor.set(0.5, 0.5);
        };

        Win.prototype.onInteraction = function () {
            //            this.game.clickSound.play();
            this.game.state.start('MainMenu');
        };

        Win.prototype.shutdown = function () {
            //            this.game.winSceneMusic.stop();
        };
        return Win;
    })(Phaser.State);
    GameBp.Win = Win;
})(GameBp || (GameBp = {}));
//# sourceMappingURL=F:/workspaces/vs/helloTS/helloTS/phaser-bp/www/js/game-bp.js.map
