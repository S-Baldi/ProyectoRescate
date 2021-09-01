import Phaser from 'phaser'
export default class creditos extends Phaser.Scene
{
  constructor()
  {
    super('credit2');
  }

  preload(){    
  }

  create()
  {
    fondoMenu = this.add.image(683, 384, 'menuCreditos').setScale(0.75);

    buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'))    
    
  }
}