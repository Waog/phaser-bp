var Utils;
(function (Utils) {
    function createButton(callbackContext, game, textString, callback, x, y) {
        var button = game.add.button(0, 0, 'button', callback, callbackContext, 2, 1, 0);
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
    }
    Utils.createButton = createButton;
    ;

    function getAudioFileArray(fileNameWithoutExtention) {
        return [
            fileNameWithoutExtention + '.mp3',
            fileNameWithoutExtention + '.ogg',
            fileNameWithoutExtention + '.m4a'];
    }
    Utils.getAudioFileArray = getAudioFileArray;
    ;
})(Utils || (Utils = {}));
