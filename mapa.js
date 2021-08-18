class mapa extends Phaser.Scene{
  constructor(){
    super ('menuMapa');
  }

  preload(){
  }

  create(){
    mapaArg = this.add.image(750, 384, 'mapaArgentina');
    buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'))
    buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7);
  }

  update(){

  }
}