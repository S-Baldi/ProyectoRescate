import Phaser from 'phaser'
export default class info extends Phaser.Scene
{
  private fondoMenu;
  private teclaAyuda;
  private teclaCreditos;
  private buttonAtras;

  constructor()
  {
    super('informacion');
  }

  preload()
  {
    
  }

  create()
  {
    this.fondoMenu = this.add.image(683, 384, 'fondoinfo').setScale(0.75);

    this.teclaAyuda = this.add.image(450, 350, 'botonayuda').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('ayuda'));

    this.teclaCreditos = this.add.image(900, 350, 'botoncreditos').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('credit2'));

    this.buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}