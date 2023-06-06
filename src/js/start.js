import {Actor, Color, Engine, Font, FontUnit, hasOnInitialize, Label, Vector} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Scene1} from './scene1.js';

export class Start extends Actor {
    engine;

    constructor(posx, posy) {
        super({
            width: Resources.Start.width,
            height: Resources.Start.height,
        });
        this.pos = new Vector(750, 600)
        this.scale = new Vector(0.5, 0.5)
        this.graphics.use(Resources.Start.toSprite())

    }

    onInitialize(engine) {
        this.engine = engine;
        this.on('pointerup', () => {
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('scene1');
    }
}



//             this.resetGame();
//               })}
// }
//     resetGame();{
//     this.engine.goToScene('scene1');
//     }