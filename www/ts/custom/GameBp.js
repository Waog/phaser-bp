var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
