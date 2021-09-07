import Phaser from 'phaser'
export default class mapa extends Phaser.Scene
{
  private mapaArg;
  private buttonMusica;
  private buttonMenu;
  constructor(){
    super ('menuMapa');
  }

  preload(){
  }

  create(){
    this.mapaArg = this.add.image(750, 384, 'mapaArgentina');

    this.buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'));

    this.buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('nivelYaguarete'))
  }

  update(){

  }
}