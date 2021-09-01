class info extends Phaser.Scene
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
    fondoMenu = this.add.image(683, 384, 'fondoinfo').setScale(0.75);

    teclaAyuda = this.add.image(450, 350, 'botonayuda').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('ayuda'));

    teclaCreditos = this.add.image(900, 350, 'botoncreditos').setScale(0.6)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('credit2'));

    buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
  }
}