import Phaser from 'phaser'
export default class ayuda extends Phaser.Scene
{
  private fondoMenu;
  private buttonAtras;
  constructor()
  {
    super('ayuda');
  }

  preload(){    
  }

  create()
  {
    this.fondoMenu = this.add.image(683, 384, 'menuAyuda').setScale(0.75);

    this.buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'))    
    
  }
}