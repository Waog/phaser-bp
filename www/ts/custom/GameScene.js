var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        };

        GameScene.prototype.create = function () {
            this.hitSound = this.game.add.audio('hit');

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
        };
        return GameScene;
    })(Phaser.State);
    GameBp.GameScene = GameScene;
})(GameBp || (GameBp = {}));
