import Phaser from 'phaser'

export default class popUpInformativo extends Phaser.Scene
{
  private txtInformativo= 
  {fontFamily: 'Viga',
  fontSize: '40pt',
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
    const popUpInformativo = this.add.image(680, 350, 'popUpMapaNiveles').setScale(0.7);
    const txtPopUpInformativo = this.add.text(450, 215, 'INFORMACIÓN', this.txtInformativo)
    const buttonAtras = this.add.image(900, 250, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('menuMapa'));
    const txtInformativo2= this.add.text(450, 400, '-Nivel Bonus del Yaguareté desbloqueado', this.Texto)
  }
}