
import '../css/style.css';
import { Actor, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import { Startscreen } from './startscreen.js';
import { Start } from './start.js';


export class Startscene extends Scene {

    onInitialize(engine) {

        const startscreen = new Startscreen();
        this.add(startscreen);

        const gameOverText = new Label({
            text: 'Start Game',
            pos: new Vector(240, 250),
            textAlign: TextAlign.Center,
            color: Color.Blue,
            font: new Font({
                family: 'impact',
                size: 45,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        const start = new Start();
        this.add(start);

        // const backButton = new Actor({
        //     this.add(backButton);
        //
        //     backButton.on('pointerup', () => {
        //         location.reload();
        //
        //     });
        // }
    }
}