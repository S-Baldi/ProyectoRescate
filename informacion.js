class info extends Phaser.Scene
{
  constructor()
  {
    super('informacion');
  }

  preload()
  {
    this.load.image('fondoinfo', 'assets/INFO.png');
    this.load.image('botonayuda', 'assets/AYUDA.png');
    this.load.image('botoncreditos', 'assets/CREDITOS.png');
  }

  create()
  {
    fondoMenu = this.add.image(683, 384, 'fondoinfo').setScale(0.75);

    teclaAyuda = this.add.image(400, 300, 'botonayuda').setScale(0.4);
    teclaCreditos = this.add.image(600, 300, 'botoncredito').setScale(0.4);

    volverMenu2 = this.add.image(50, 500, 'Atrás')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menu'))
  }
}