import Phaser from 'phaser'
export default class info extends Phaser.Scene
{
  constructor()
  {
    super('informacion');
  }

  preload()
  {  
  }

  create()
  {
    const fondoMenu = this.add.image(683, 384, 'fondoLimpio').setScale(0.75);
    this.add.text(380, 100, 'INFORMACIÓN', {
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    const teclaAyuda = this.add.text(250, 350, 'AYUDA', {
      fontFamily: 'Titan One',
      fontSize: '50pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })
    .setInteractive()
    .on('pointerover', () => teclaAyuda.setScale(1.1))    
    .on('pointerout', () => teclaAyuda.setScale(1))
    .on('pointerdown', () => this.scene.start('ayuda'));

    const teclaCreditos = this.add.text(800, 350, 'CRÉDITOS', {
      fontFamily: 'Titan One',
      fontSize: '50pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })
    .setInteractive()
    .on('pointerover', () => teclaCreditos.setScale(1.1))
    .on('pointerout', () => teclaCreditos.setScale(1))
    .on('pointerdown', () => this.scene.start('credit2'));

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}