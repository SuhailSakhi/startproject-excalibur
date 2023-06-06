export { Resources, ResourceLoader }
import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import backgroundImage from '../images/background2.png'
import background2Image from '../images/loadingscreen.png'
import sharkImage from '../images/shark.png'
import tacoImage from '../images/taco.png'
import octopusImage from '../images/octopus.png'
import gameOverImage from '../images/gameover.png'
import startImage from '../images/start.png'



const Resources = {
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(backgroundImage),
    Shark: new ImageSource(sharkImage),
    Taco: new ImageSource(tacoImage),
    Octopus: new ImageSource(octopusImage),
    GameOverImage: new ImageSource(gameOverImage),
    Background2: new ImageSource(background2Image),
    Start: new ImageSource(startImage)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Background,
    Resources.Shark,
    Resources.Taco,
    Resources.Octopus,
    Resources.GameOverImage,
    Resources.Background2,
    Resources.Start
])

