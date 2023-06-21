import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js";

export class Shark extends Enemy {
    game
    constructor() {
        super(Resources.Shark.width, Resources.Shark.height);
        this.scale= new Vector(0.5,0.5)
        this.pos = new Vector(1500, Math.random() * 730)
        this.spawnPosition = new Vector(this.pos.x, this.pos.y)
        this.vel = new Vector(-900, 0)
        this.graphics.use(Resources.Shark.toSprite())
        console.log('Shark aangemaakt!')

        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.on("exitviewport", (event) => this.exit())
    }

    //instance method
    exit() {
        this.scene.spawnShark()
        this.kill()
    }
    onInitialize(_engine) {
        this.game = _engine;

    }

}