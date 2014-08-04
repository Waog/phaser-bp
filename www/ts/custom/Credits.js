var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
            this.game.state.start('MainMenu');
        };

        Credits.prototype.shutdown = function () {
        };
        return Credits;
    })(Phaser.State);
    GameBp.Credits = Credits;
    ;
})(GameBp || (GameBp = {}));
