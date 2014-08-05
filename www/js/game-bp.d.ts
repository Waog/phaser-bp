declare module GameBp {
    class GameScene extends Phaser.State {
        public background: Phaser.Sprite;
        public music: Phaser.Sound;
        public hitSound: Phaser.Sound;
        public preload(): void;
        public create(): void;
        public addPhysicsMovmentAndColision(sprite: Phaser.Sprite): void;
        public addInputHandler(sprite: Phaser.Sprite, callback: Function): void;
        public onWin(): void;
        public onLose(): void;
        public shutdown(): void;
    }
}
declare module GameBp {
    class Lose extends Phaser.State {
        public bg: Phaser.Sprite;
        public preload(): void;
        public create(): void;
        public onInteraction(): void;
        public shutdown(): void;
    }
}
declare module GameBp {
    class MainMenu extends Phaser.State {
        public background: Phaser.Sprite;
        public logo: Phaser.BitmapText;
        public preload(): void;
        public create(): void;
        public onStart(): void;
        public onCredits(): void;
        public fadeOut(callback: Function, callbackContext: any): void;
        public startGame(): void;
        public startCredits(): void;
        public shutdown(): void;
    }
}
declare module GameBp {
    class Preloader extends Phaser.State {
        public preloadBg: Phaser.Sprite;
        public preloadBar: Phaser.Sprite;
        public preload(): void;
        public create(): void;
        public startMainMenu(): void;
    }
}
declare module GameBp {
    class Win extends Phaser.State {
        public bg: Phaser.Sprite;
        public preload(): void;
        public create(): void;
        public onInteraction(): void;
        public shutdown(): void;
    }
}
declare module GameBp {
    class DecoratedButton extends Phaser.Group {
        static PADDING: number;
        public button: Phaser.Button;
        public label: Phaser.BitmapText;
        constructor(text: string, game: Phaser.Game, callback: Function, callbackContext: Object, size?: number, x?: number, y?: number);
    }
}
declare module GameBp {
    class GameBp extends Phaser.Game {
        constructor();
    }
}
declare module GameBp {
    class Bootloader extends Phaser.State {
        public preload(): void;
        public create(): void;
    }
}
declare module Utils {
    function createButton(callbackContext: any, game: Phaser.Game, textString: string, callback: Function, x: number, y: number): void;
    function getAudioFileArray(fileNameWithoutExtention: string): string[];
}
declare module GameBp {
    class Credits extends Phaser.State {
        public bg: Phaser.Sprite;
        public preload(): void;
        public create(): void;
        public onBack(): void;
        public shutdown(): void;
    }
}
