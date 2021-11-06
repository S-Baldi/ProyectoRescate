import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class popUpInformativo extends Phaser.Scene
{
  private txtInformativo= 
  {fontFamily: 'Titan One',
  fontSize: '35pt',
  color: '#FFBD0D',
  stroke: '#00572f',
  strokeThickness: 6,
  align: 'justify',
  };
  private Texto =     
  {fontFamily: 'Viga',
  fontSize: '20pt',
  color: '#000000',
  align: 'justify',
  lineSpacing: -5
  };

  constructor()
  {
    super('popUpInformativo');
  }

  preload()
  {
    this.load.image('popUpMapaNiveles', 'assets/MenuPrincipal/popUp.png'); 
  }

  create()
  {  
    const sonidoButton = this.sound.add('sonidoBoton');
    const popUpInformativo = this.add.image(680, 350, 'popUpMapaNiveles').setScale(0.7);
    const txtPopUpInformativo = this.add.text(450, 215, getPhrase('INFORMACIÓN'), this.txtInformativo)
    const buttonAtras = this.add.image(900, 250, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('menuMapa') && sonidoButton.play({volume:0.5}));
    
  }

  public mostrarInfoNiveles(info:string)
  {
    if (info=='bonusYaguareteDesbloqueado') 
    {
      let txtInformativoBonusYagua= this.add.text(450, 400, getPhrase('-Nivel Bonus del Yaguareté desbloqueado'), this.Texto).setDepth(3);
    }
    if (info=='nivelPinguiDesbloqueado') 
    {
      let txtInformativoPingui= this.add.text(450, 400, getPhrase('-Nivel Principal del Pingüino desbloqueado'), this.Texto).setDepth(3);
    }
    if (info=='bonusPinguinoDesbloqueado') 
    {
      let txtInformativoBonusYagua= this.add.text(450, 400, getPhrase('-Nivel Bonus del Pinguino desbloqueado'), this.Texto).setDepth(3);
    }   
  }
}