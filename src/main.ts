import Phaser from 'phaser'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import extras from './scenes/extras/extras'
import pop_upExt from './scenes/extras/pop_upExtras'

//NIVEL YAGUARETE
import nivel_1 from './scenes/nivel1/nivel1'
import bonus from './scenes/nivel1/nivelBonus/nivelBonus'
import gameOver from './scenes/nivel1/gameOver'
import gameWin from './scenes/nivel1/gameWin'
import pop_up from './scenes/nivel1/nivelBonus/pop_up_Bonus'
import preguntas from './scenes/nivel1/nivelBonus/preguntas'
import pause from './scenes/nivel1/pause'
import UI from './scenes/UI'

//NIVEL PINGUINO
import nivel_5 from './scenes/nivel5/nivel5'

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
  scene: [mp1, info, mapa, ayuda, creditos, extras, nivel_1, UI, gameOver, gameWin, pause, bonus, pop_up, preguntas, pop_upExt, nivel_5]
};

export default new Phaser.Game(config)