import Phaser from 'phaser'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import nivel_1 from './scenes/nivel1'

const config = 
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
    default: 'arcade',
    arcade:
    {
      gravity: { y: 350 },
      debug: false
    }
  },
  scene: [mp1, info, mapa, ayuda, creditos, nivel_1]
};

export default new Phaser.Game(config)