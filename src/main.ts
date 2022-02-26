import 'regenerator-runtime/runtime'
import Phaser from 'phaser'
import precarga from './scenes/precarga'
import logoUnraf from './scenes/logoUnraf'
import ayuda from './scenes/ayuda'
import creditos from './scenes/creditos'
import info from './scenes/informacion'
import mapa from './scenes/mapa'
import mp1 from './scenes/mp'
import extras from './scenes/extras/extras'
import pop_upExt from './scenes/extras/pop_upExtras'
import popUpMapa from './scenes/popUpMapa'
import popUpInformativo from './scenes/popUpInformativo'
import creditosMusica from './scenes/creditosMusica'
import idioma from './scenes/idioma'

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

//NIVEL MONO
import nivel_2 from './scenes/nivel2/nivel2'
import pauseMono from './scenes/nivel2/pause'
import UI_Mono from './scenes/nivel2/UI_Mono'
import gameOverMono from './scenes/nivel2/gameOver'
import gameWinMono from './scenes/nivel2/gameWin'
import bonusMono from './scenes/nivel2/nivelBonus/nivelBonusMono'
import pop_up_BonusMono from './scenes/nivel2/nivelBonus/pop_up_BonusMono'
import preguntasMono from './scenes/nivel2/nivelBonus/preguntasMono'

//NIVEL BALLENA
import nivel_4 from './scenes/nivel4/nivel4'
import UI_Ballena from './scenes/nivel4/UI_Ballena'
import gameWinBallena from './scenes/nivel4/gameWin'
import gameOverBallena from './scenes/nivel4/gameOver'
import pauseBallena from './scenes/nivel4/pause'
import nivel_4_2 from './scenes/nivel4/nivel4_2'
import nivelBonusBallena from './scenes/nivel4/nivelBonus/nivelBonusBallena'
import pop_up_B_Ballena from './scenes/nivel4/nivelBonus/pop_up_BonusBallena'
import preguntasBonusBallena from './scenes/nivel4/nivelBonus/preguntasBallena'
localStorage.clear();

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
  scene: [logoUnraf, precarga, mp1, info, mapa, ayuda, creditos, creditosMusica,extras, 
    nivel_1, UI, gameOver, gameWin, pause, bonus, pop_up, preguntas, pop_upExt, popUpMapa, 
    nivel_5, UI_Pinguino, gameWinPinguino, gameOverPinguino, pausePinguino, bonusPingui, pop_up_Pingui, preguntasPingui, 
    nivel_2, UI_Mono, gameWinMono, gameOverMono, pauseMono, popUpInformativo, bonusMono, pop_up_BonusMono, preguntasMono, idioma,
    nivel_4, nivel_4_2, UI_Ballena, gameWinBallena, gameOverBallena, pauseBallena, nivelBonusBallena, pop_up_B_Ballena, preguntasBonusBallena, 
  ]
};

export default new Phaser.Game(config)
//Yaguarete
localStorage.setItem('estrellasYaguarete', '0');
localStorage.setItem('estrellasYaguareteBonus', '0');
//Pinguino
localStorage.setItem('estrellasPingui', '0');
localStorage.setItem('estrellasPinguinoBonus', '0');
//Mono
localStorage.setItem('estrellasMono', '0');
localStorage.setItem('estrellasMonoBonus', '0');
//Ballena
localStorage.setItem('estrellasBallena', '0');
localStorage.setItem('estrellasBallenaBonus', '0');
//Musica
localStorage.setItem('musicaPlay', '1');


