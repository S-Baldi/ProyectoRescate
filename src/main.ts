import Phaser from 'phaser'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import extras from './scenes/extras/extras'
import pop_upExt from './scenes/extras/pop_upExtras'
import popUpMapa from './scenes/popUpMapa'

//NIVEL YAGUARETE
import nivel_1 from './scenes/nivel1/nivel1'
import bonus from './scenes/nivel1/nivelBonus/nivelBonus'
import gameOver from './scenes/nivel1/gameOver'
import gameWin from './scenes/nivel1/gameWin'
import pop_up from './scenes/nivel1/nivelBonus/pop_up_Bonus'
import preguntas from './scenes/nivel1/nivelBonus/preguntas'
import pause from './scenes/nivel1/pause'
import UI from './scenes/nivel1/UI'

//NIVEL PINGUINO
import nivel_5 from './scenes/nivel5/nivel5'
import gameWinPinguino from './scenes/nivel5/gameWin'
import gameOverPinguino from './scenes/nivel5/gameOver'
import UI_Pinguino from './scenes/nivel5/UI_Pinguino'
import pausePinguino from './scenes/nivel5/pause'
import bonusPingui from './scenes/nivel5/nivelBonus/nivelBonusPingui'
import pop_up_Pingui from './scenes/nivel5/nivelBonus/pop_up_BonusPin'
import preguntasPingui from './scenes/nivel5/nivelBonus/preguntasPingui'

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
  scene: [mp1, info, mapa, ayuda, creditos, extras, 
    nivel_1, UI, gameOver, gameWin, pause, bonus, pop_up, preguntas, pop_upExt, popUpMapa, 
    nivel_5, UI_Pinguino, gameWinPinguino, gameOverPinguino, pausePinguino, bonusPingui, pop_up_Pingui, preguntasPingui]
};

export default new Phaser.Game(config)
localStorage.setItem('estrellasYaguarete', '0');
localStorage.setItem('estrellasPingui', '0');
localStorage.setItem('estrellasYaguareteBonus', '0');
localStorage.setItem('estrellasPinguinoBonus', '0');

