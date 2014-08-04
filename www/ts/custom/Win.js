var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameBp;
(function (GameBp) {
    var Win = (function (_super) {
        __extends(Win, _super);
        function Win() {
            _super.apply(this, arguments);
        }
        Win.prototype.preload = function () {
            this.load.image('winBg', 'assets/placeholder/img/squareGradientTopDownGreen.png');
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
            this.game.state.start('MainMenu');
        };

        Win.prototype.shutdown = function () {
        };
        return Win;
    })(Phaser.State);
    GameBp.Win = Win;
})(GameBp || (GameBp = {}));
