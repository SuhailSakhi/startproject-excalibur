import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'


export class GameOverImage extends Actor {

    offset

    onInitialize(engine){
        const storedScores = JSON.parse(localStorage.getItem('scores'))
        const GameOverImage = Resources.GameOverImage.toSprite()
        this.offset = GameOverImage.width
        GameOverImage.height = 730
        GameOverImage.width = 1500
        const group = new GraphicsGroup({
            members: [
                {
                    graphic: GameOverImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: GameOverImage,
                    pos: new Vector(GameOverImage.width, 0),
                }
            ]

        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)

        // this.score =
        //     this.mylabel = new Label({
        //         text: `Score: ${this.score}`,
        //         pos: new Vector(350, 350),
        //         font: new font({
        //             family: 'impact',
        //             size:40,
        //             unit: FontUnit.Px,
        //             color: Color.White,
        //         })
        //
        //     })
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}
