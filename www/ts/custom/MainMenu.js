var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
            this.fadeOut(this.startGame, this);
        };

        MainMenu.prototype.onCredits = function () {
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
        };
        return MainMenu;
    })(Phaser.State);
    GameBp.MainMenu = MainMenu;
})(GameBp || (GameBp = {}));
