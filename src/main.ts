import Phaser from 'phaser'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import extras from './scenes/extras'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import nivel_1 from './scenes/nivel1'


const config : Phaser.Types.Core.GameConfig =
{
  type: Phaser.WEBGL,
  scale: 
  {
    mode: Phaser.Scale.FIT,
    width: 1366,
    height: 768,
  },
  physics: 
  {
    default: 'matter',
    matter:
    {
      gravity: { y: 350 },
      debug: true
    }
  },
  scene: [mp1, info, mapa, ayuda, creditos, extras, nivel_1]
};

export default new Phaser.Game(config)