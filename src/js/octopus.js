import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js";

export class Octopus extends Enemy {
    game
    constructor() {
        super(Resources.Octopus.width, Resources. Octopus.height);
        this.scale= new Vector(0.08,0.08)
        this.pos = new Vector(1500, Math.random() * 800)
        this.spawnPosition = new Vector(this.pos.x, this.pos.y)
        this.vel = new Vector(-1200, 0)
        this.graphics.use(Resources.Octopus.toSprite())

        console.log('Octopus aangemaakt!')
        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.on("exitviewport", (event) => this.exit())
    }

    //instance method
    // exit() {
    //     this.game.spawnOctopus()
    //     this.kill()
    // }
    onInitialize(_engine) {
        this.game = _engine;

    }

}