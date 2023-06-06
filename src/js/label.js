import { Label, FontUnit, Font} from "excalibur";


let label = new Label({
    text: 'Score: 0',
    pos: new Vector(100, 100),
    font: new Font({
        family: 'impact',
        size: 24,
        unit: FontUnit.Px
    })
})

this.add(label)
label.text = 'Score: 100'