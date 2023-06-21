// import '../css/style.css'
// import {Actor, Color, Engine, Font, FontUnit, Label, Vector} from "excalibur"
// import { Resources, ResourceLoader } from './resources.js'
// import {Background} from "./background.js";
// import {Fish} from "./fish.js";
// import {Enemy} from "./enemy.js";
// import {Taco} from "./taco.js";
// import {Octopus} from "./octopus.js";
// import {Shark} from "./shark.js";
//
//
// export class Game extends Engine {mewff
//     score
//     mylabel
//     Fish
//
//     constructor() {
//         super({ width: 1500, height: 730 })
//         this.start(ResourceLoader).then(() => this.startGame())
//         this.showDebug(true)
//         this.debug.transform.showAll = true
//     }
//
//     startGame() {
//
//         console.log("maak een background")
//         const background = new Background()
//         this.add(background)
//
//         this.score = 0
//         this.mylabel = new Label({
//             text: `Score: ${this.score}`,
//             pos: new Vector(70, 30),
//             font: new Font({
//                 family: 'impact',
//                 size: 40,
//                 unit: FontUnit.Px,
//                 color:Color.White
//             })
//         })
//         this.add(this.mylabel)
//
//         const fish = new Fish()
//         this.add(fish)
//
//         this.spawnShark()
//
//         this.spawnOctopus()
//
//         this.spawnTaco()
//
//         this.updateScore()
//
//     }
//
//   spawnTaco(){
//       const taco = new Taco()
//       this.add(taco)
//
//   }
//     spawnShark(){
//         const shark = new Shark()
//         this.add(shark)
//     }
//     spawnOctopus(){
//         const octopus = new Octopus()
//         this.add(octopus)
//     }
//
//     updateScore() {
//         this.score++
//         this.mylabel.text = `Score: ${this.score}`
//         console.log(this.score)
//     }
// }
//
// new Game()

import {Actor, Color, Engine, Font, FontUnit, Label, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import '../css/style.css'
import {Scene1} from './scene1.js';
import {Startscene} from './startscene.js';
import {Gameover} from './gameover.js';
// import {resouceLoader} from './resourceloader.js';
// import {ResourceLoader} from "./resources.js";

export class Game extends Engine {


    constructor() {
        console.log("start")
        super({
            width: 1500,
            height: 730
        });
        this.start(ResourceLoader).then(() => this.startGame());
        this.showDebug(true);
    }

    startGame() {
        this.addScene('start', new Startscene());
        this.addScene('scene1', new Scene1());
        this.addScene('gameover', new Gameover());

        this.goToScene('start');
    }
}
new Game()

