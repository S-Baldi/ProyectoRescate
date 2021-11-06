import Phaser from 'phaser'
import { getPhrase } from '~/services/translation'
export default class creditos extends Phaser.Scene
{
  private fuenteTexto = {
    fontFamily: 'Titan One',
    fontSize: '30pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }
  constructor()
  {
    super('credit2');
  }

  preload(){ }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    const fondoMenu = this.add.image(683, 384, 'menuCreditos').setScale(0.72);

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('informacion') && sonidoButton.play({volume:0.5}))    

    this.add.text(500, 50, getPhrase('CRÉDITOS'), {
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    this.add.text(520, 610 , 'Gallo, Jonathan', this.fuenteTexto)
    this.add.text(95, 400, 'Castelnovo, Renzo', this.fuenteTexto)
    this.add.text(935, 400, 'Baldi, Santiago', this.fuenteTexto)
    
  }
}