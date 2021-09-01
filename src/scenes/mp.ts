import Phaser from 'phaser'
export default class mp1 extends Phaser.Scene
{
  constructor()
  {
    super('menuPpal');
  }

  preload()
  {
    this.load.image('menu', 'public/assets/MenuPrincipal/menuPpal.png');
    this.load.image('botonPlay', 'public/assets/MenuPrincipal/Botones/botonPlay.png');
    this.load.image('botonPlay2', 'public/assets/MenuPrincipal/Botones/botonPlay2.png');
    this.load.image('botonDesbloqueable', 'public/assets/MenuPrincipal/Botones/botonDesbloqueable.png');
    this.load.image('botonInfo', 'public/assets/MenuPrincipal/Botones/botonInfo.png');
    this.load.image('botonMusica', 'public/assets/MenuPrincipal/Botones/botonSonido.png');
    this.load.image('botonIdiomaEspañol', 'public/assets/MenuPrincipal/bandera.png');

    this.load.image('mapaArgentina', 'public/assets/Mapa/mapa.png');
    this.load.image('botonMenuPpal', 'public/assets/MenuPrincipal/Botones/botonMenu.png')

    this.load.audio('sonidoBoton', 'public/audio/boton.mp3')

    //Menu info
    this.load.image('fondoinfo', 'public/assets/MenuPrincipal/INFO.png');
    this.load.image('botonayuda', 'public/assets/MenuPrincipal/Botones/AYUDA.png');
    this.load.image('botoncreditos', 'public/assets/MenuPrincipal/Botones/CREDITOS.png');
    this.load.image('botonatras', 'public/assets/MenuPrincipal/Botones/atras.png');
              //Menu ayuda
    this.load.image('menuAyuda','public/assets/MenuPrincipal/MenuAyuda.png');
              //Menu Creditos
    this.load.image('menuCreditos','public/assets/MenuPrincipal/MenuCreditos.png');
  }

  create()
  {
    //const sonidoButton = this.sound.add('sonidoBoton');

    const fondoMenu = this.add.image(683, 384, 'menu').setScale(0.75);
    const buttonPlay = this.add.image(900, 650, 'botonPlay')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa') /* && const sonidoButton.play({volume:0.5}) */);

    const buttonPremio = this.add.image(700, 650, 'botonDesbloqueable');

    const buttonInfo = this.add.image(500, 650, 'botonInfo')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('informacion'));

    const buttonMusica = this.add.image(90, 90, 'botonMusica').setScale(0.7);
    const banderaArg = this.add.image(90, 200, 'botonIdiomaEspañol').setScale(0.2);

  }

  update()
  {

  }
}