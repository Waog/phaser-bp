var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameBp;
(function (GameBp) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBg = this.add.sprite(0, 0, 'preloaderBg');
            this.preloadBg.width = this.game.world.width;
            this.preloadBg.height = this.game.world.height;

            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);

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
