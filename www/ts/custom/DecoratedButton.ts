module GameBp {

    export class DecoratedButton extends Phaser.Group {

        static PADDING: number = 15;

        button: Phaser.Button;
        label: Phaser.BitmapText;

        constructor(text: string, game: Phaser.Game, callback: Function, callbackContext: Object, size: number = 65, x?: number, y?: number) {
            super(game);

            this.button = new Phaser.Button(game, 0, 0, 'button', callback, callbackContext, 2, 1, 0);


            this.label = game.add.bitmapText(DecoratedButton.PADDING, DecoratedButton.PADDING, 'bmFont', text, size);
            this.label.align = 'center';

            this.button.width = this.label.width + 3 * DecoratedButton.PADDING;
            this.button.height = this.label.height + 3 * DecoratedButton.PADDING;

            this.add(this.button);
            this.add(this.label);

            if (x) {
                this.x = x - this.button.width / 2;
            } else {
                this.x = game.world.centerX - this.button.width / 2;
            }
            if (y) {
                this.y = y - this.button.height / 2;
            } else {
                this.y = game.world.centerY - this.button.height / 2;
            }
        }

    }
}