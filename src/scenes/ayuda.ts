import Phaser from 'phaser'
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
    const fondoMenu = this.add.image(683, 384, 'menuAyuda').setScale(0.75);

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'))    
    
  }
}