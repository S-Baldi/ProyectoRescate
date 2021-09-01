class ayuda extends Phaser.Scene
{
  constructor()
  {
    super('ayuda');
  }

  preload(){    
  }

  create()
  {
    fondoMenu = this.add.image(683, 384, 'menuAyuda').setScale(0.75);

    buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'))    
    
  }
}