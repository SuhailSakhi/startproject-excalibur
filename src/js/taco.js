import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Taco extends Actor {
    game

    constructor() {
        super({width: Resources.Taco.width, height: Resources.Taco.height});
        this.scale= new Vector(0.2,0.2)
        this.pos = new Vector(1500, Math.random() * 700)
        this.vel = new Vector(-1000, 0)
        this.graphics.use(Resources.Taco.toSprite())

        console.log('Taco aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on("exitviewport", (event) => this.exittaco())
    }
            exittaco() {
                this.game.currentScene.spawnTaco()
                        this.kill()
                                }
            onInitialize(_engine) {
                super.onInitialize(_engine);
                    this.game = _engine;
                                        }

    hitSomething(event) {
        this.game.currentScene.spawnTaco()
        event.target.kill()
    }
}

