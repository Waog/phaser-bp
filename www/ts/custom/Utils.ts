module Utils {
    export function createButton(callbackContext:any, game: Phaser.Game, textString: string, callback: Function, x: number, y: number): void {
        var button:Phaser.Button = game.add.button(0, 0, 'button', callback, callbackContext, 2, 1, 0);
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
    };

    export function getAudioFileArray(fileNameWithoutExtention:string):string[] {
        return [fileNameWithoutExtention + '.mp3',
            fileNameWithoutExtention + '.ogg',
            fileNameWithoutExtention + '.m4a'];
    };
}