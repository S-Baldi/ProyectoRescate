import Phaser from 'phaser'
export default class creditos extends Phaser.Scene
{
  private fondoMenu;
  private buttonAtras;
  constructor()
  {
    super('credit2');
  }

  preload(){    
  }

  create()
  {
    this.fondoMenu = this.add.image(683, 384, 'menuCreditos').setScale(0.75);

    this.buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'))    
    
  }
}