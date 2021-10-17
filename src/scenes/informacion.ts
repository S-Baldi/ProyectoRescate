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
    this.add.text(450, 100, 'INFORMACIÓN', {
      font: '50pt Helvetica neue black',
      color: 'yellow'
    })

    const teclaAyuda = this.add.text(350, 350, 'AYUDA', {
      font: '40pt Helvetica neue black',
      color: 'yellow'
    })
    .setInteractive()
    .on('pointerdown', () => this.scene.start('ayuda'));

    const teclaCreditos = this.add.text(800, 350, 'CRÉDITOS', {
      font: '40pt Helvetica neue black',
      color: 'yellow'
    })
    .setInteractive()
    .on('pointerdown', () => this.scene.start('credit2'));

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}