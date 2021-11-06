import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';
export default class ayuda extends Phaser.Scene
{
  constructor()
  {
    super('ayuda');
  }

  preload(){    
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    const fondoMenu = this.add.image(683, 384, 'menuAyuda').setScale(0.72);

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('informacion') && sonidoButton.play({volume:0.5}))    

    this.add.text(550, 40, getPhrase('AYUDA'), {
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })
    
  }
}