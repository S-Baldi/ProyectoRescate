import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class info extends Phaser.Scene
{
  private fuenteTexto = 
  {
    fontFamily: 'Titan One',
    fontSize: '50pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }
  
  constructor()
  {
    super('informacion');
  }

  preload()
  {  
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    
    const fondoMenu = this.add.image(683, 384, 'menuInfo').setScale(0.72);
    this.add.text(380, 100, getPhrase('INFORMACIÓN'), {
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    const teclaAyuda = this.add.text(250, 350, getPhrase('AYUDA'), this.fuenteTexto)
    .setInteractive()
    .on('pointerover', () => teclaAyuda.setScale(1.1))    
    .on('pointerout', () => teclaAyuda.setScale(1))
    .on('pointerdown', () => this.scene.start('ayuda') && sonidoButton.play({volume:0.5}));

    const teclaCreditos = this.add.text(800, 350, getPhrase('CRÉDITOS'), this.fuenteTexto )
    .setInteractive()
    .on('pointerover', () => teclaCreditos.setScale(1.1))
    .on('pointerout', () => teclaCreditos.setScale(1))
    .on('pointerdown', () => this.scene.start('credit2') && sonidoButton.play({volume:0.5}));

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('menuPpal') && this.scene.get('menuPpal').detenerMusica() && sonidoButton.play({volume:0.5}))
  }
}