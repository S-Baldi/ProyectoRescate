import Phaser from 'phaser'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import extras from './scenes/extras'
import gameOver from './scenes/gameOver'
import gameWin from './scenes/gameWin'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import nivel_1 from './scenes/nivel1'
import bonus from './scenes/nivelBonus'
import UI from './scenes/UI'

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
      gravity: { y: 10 },
      debug: false
    }
  },
  scene: [mp1, info, mapa, ayuda, creditos, extras,UI, nivel_1, gameOver, gameWin, bonus]
};

export default new Phaser.Game(config)