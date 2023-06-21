import '../css/style.css'
import {Actor, Color, Engine, Font, FontUnit, Label, Vector,Scene} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Background} from "./background.js";
import {Fish} from "./fish.js";
import {Enemy} from "./enemy.js";
import {Taco} from "./taco.js";
import {Octopus} from "./octopus.js";
import {Shark} from "./shark.js";



export class Scene1 extends Scene {
    score
    mylabel
    Fish

    onInitialize(_engine) {

        console.log("maak een background")
        const background = new Background()
        this.add(background)

        this.score = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(70, 30),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.add(this.mylabel)

        const fish = new Fish()
        this.add(fish)

        this.spawnShark()

        this.spawnOctopus()

        this.spawnTaco()

        this.updateScore()

    }

    spawnTaco(){
        const taco = new Taco()
        this.add(taco)

    }
    spawnShark(){
        const shark = new Shark()
        this.add(shark)
    }
    spawnOctopus(){
        const octopus = new Octopus()
        this.add(octopus)
    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
        console.log(this.score)
        localStorage.setItem('scores', JSON.stringify(this.score))

    }
}


