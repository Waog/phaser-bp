var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameBp;
(function (GameBp) {
    var Lose = (function (_super) {
        __extends(Lose, _super);
        function Lose() {
            _super.apply(this, arguments);
        }
        Lose.prototype.preload = function () {
            this.load.image('loseBg', 'assets/placeholder/img/squareGradientTopDownRed.png');
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
            this.game.state.start('MainMenu');
        };

        Lose.prototype.shutdown = function () {
        };
        return Lose;
    })(Phaser.State);
    GameBp.Lose = Lose;
    ;
})(GameBp || (GameBp = {}));
