import Phaser from 'phaser'
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
    const fondoMenu = this.add.image(683, 384, 'menuInfo').setScale(0.72);
    this.add.text(380, 100, 'INFORMACIÓN', {
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    const teclaAyuda = this.add.text(250, 350, 'AYUDA', this.fuenteTexto)
    .setInteractive()
    .on('pointerover', () => teclaAyuda.setScale(1.1))    
    .on('pointerout', () => teclaAyuda.setScale(1))
    .on('pointerdown', () => this.scene.start('ayuda'));

    const teclaCreditos = this.add.text(800, 350, 'CRÉDITOS', this.fuenteTexto )
    .setInteractive()
    .on('pointerover', () => teclaCreditos.setScale(1.1))
    .on('pointerout', () => teclaCreditos.setScale(1))
    .on('pointerdown', () => this.scene.start('credit2'));

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}