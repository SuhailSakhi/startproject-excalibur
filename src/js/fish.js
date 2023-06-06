import {Actor, Vector, Input} from "excalibur";
import {Resources} from "./resources.js";
import {Enemy} from "./enemy.js";
import {Octopus} from "./octopus.js";
import {Taco} from "./taco.js";


export class Fish extends Actor {

    engine;
    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height});
        this.pos = new Vector (100,100)
        this.graphics.use(Resources.Fish.toSprite())
        console.log('player aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))
    }


    onInitialize(_engine) {
        this.engine = _engine;
        this.on("kill", () => this.engine.goToScene("gameover"))
    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            console.log("Man I am dead!")
            this.kill()
            this.engine.goToScene("gameover")
        }
        // if (event.other instanceof Octopus) {
        //     console.log("nooooo")
        //     this.kill()
        //     game.goToScene("gameover")
        // }

        //communicatie tussen classes (player en taco)
        if (event.other instanceof Taco) {
            console.log("Yum!")
            console.log("game score moet +1")
            this.engine.currentScene.updateScore()

        }
    }


    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {            yspeed = -600        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {            yspeed = 600        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {            xspeed = -400        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {            xspeed = 400        }
        this.vel = new Vector(xspeed,yspeed)
    }



}



