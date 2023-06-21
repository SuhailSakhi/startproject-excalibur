import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'


export class Startscreen extends Actor {

    offset

    onInitialize(engine){
        const background2Image = Resources.Background2.toSprite()
        this.offset = background2Image.width
        background2Image.height = 730
        background2Image.width = 1500
        const group = new GraphicsGroup({
            members: [
                {
                    graphic: background2Image,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: background2Image,
                    pos: new Vector(background2Image.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}
