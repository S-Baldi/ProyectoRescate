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
    const fondoMenu = this.add.image(683, 384, 'fondoinfo').setScale(0.75);

    const teclaAyuda = this.add.image(450, 350, 'botonayuda').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('ayuda'));

    const teclaCreditos = this.add.image(900, 350, 'botoncreditos').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('credit2'));

    const buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}