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
            this.input.maxPointers = 1;

            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
            } else {
            }

            this.game.state.start('Preloader', true, false);
        };
        return Bootloader;
    })(Phaser.State);
    GameBp.Bootloader = Bootloader;
})(GameBp || (GameBp = {}));
