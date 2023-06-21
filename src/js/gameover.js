
import '../css/style.css';
import { Actor, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import { GameOverImage} from "./gamoverscreen.js";

export class Gameover extends Scene {

    onInitialize(engine) {
        const storedScores = JSON.parse(localStorage.getItem('scores'))
        console.log(storedScores)
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

        this.score =
            this.mylabel = new Label({
                text: `Score: ${storedScores}`,
                pos: new Vector(350, 350),
                font: new Font({
                    family: 'impact',
                    size: 100,
                    unit: FontUnit.Px,
                    color: Color.White,
                })
            })
                 this.add(this.mylabel)

        this.add(gameOverText);{
        }
}
}