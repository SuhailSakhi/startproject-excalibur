import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Enemy extends Actor {
    game
    spawnPosition
    constructor(width, height) {
        // super({width: Resources.Shark.width, height: Resources.Shark.height});
        super({width: width, height: height});
        // this.scale= new Vector(0.8,0.8)
        // this.pos = new Vector(1500, Math.random() * 730)
        this.vel = new Vector(-900, 0)
        // this.graphics.use(Resources.Shark.toSprite())

        console.log('enemy aangemaakt!')
        // this.on('collisionstart', (event) => this.hitSomething(event))
        this.on("exitviewport", (event) => this.exit())
    }

    exit() {
        // this.kill()
        // this.game.spawnShark()
        // this.game.spawnOctopus()
        this.pos = this.spawnPosition

    }
        onInitialize(_engine) {
            this.game = _engine;

        }

}