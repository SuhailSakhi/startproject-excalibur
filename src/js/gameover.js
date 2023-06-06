
import '../css/style.css';
import { Actor, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import { GameOverImage} from "./gamoverscreen.js";

export class Gameover extends Scene {

    onInitialize(engine) {

        const gameOverImage = new GameOverImage();
        this.add(gameOverImage);


        const gameOverText = new Label({
            text: 'You died! Click on the button below to go back to the start screen!',
            pos: new Vector(240, 250),
            textAlign: TextAlign.Center,
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        // const backButton = new Actor({
        //     this.add(backButton);
        //
        //     backButton.on('pointerup', () => {
        //         location.reload();
        //         // engine.goToScene('start'); // Stuur de gebruiker naar de startscene
        //     });
        // }
    }
}