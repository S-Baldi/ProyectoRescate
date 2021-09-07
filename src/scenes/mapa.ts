import Phaser from 'phaser'
export default class mapa extends Phaser.Scene
{
  constructor(){
    super ('menuMapa');
  }

  preload(){
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
  }

  create(){
    const mapaArg = this.add.image(750, 384, 'mapaArgentina');

    const buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'));

    const buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)
    
    const buttonNivel1 = this.add.image(1130,170, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('nivelYaguarete'))

    const buttonNivel2 = this.add.image(420,80, 'botonNivel').setScale(0.25)
    /* .setInteractive()
    .on('pointerdown', () => this.scene start('nivelMono')) */

    const buttonNivel3 = this.add.image(360,300, 'botonNivel').setScale(0.25)
  /*   .setInteractive()
    .on('pointerdown', () => this.scene start('nivelCondor')) */

    const buttonNivel4 = this.add.image(980,470, 'botonNivel').setScale(0.25)
   /*  .setInteractive()
    .on('pointerdown', () => this.scene start('nivelBallena')) */

    const buttonNivel5 = this.add.image(380,650, 'botonNivel').setScale(0.25)
    /* .setInteractive()
    .on('pointerdown', () => this.scene start('nivelPinguino')) */
  }

  update(){

  }
}