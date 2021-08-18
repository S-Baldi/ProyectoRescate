class mp1 extends Phaser.Scene{
  constructor(){
    super('menuPpal');
  }

  preload(){
    this.load.image('menu', 'assets/MenuPrincipal/menuPpal.png');
    this.load.image('botonPlay', 'assets/MenuPrincipal/Botones/botonPlay.png');
    this.load.image('botonPlay2', 'assets/MenuPrincipal/Botones/botonPlay2.png');
    this.load.image('botonDesbloqueable', 'assets/MenuPrincipal/Botones/botonDesbloqueable.png');
    this.load.image('botonInfo', 'assets/MenuPrincipal/Botones/botonInfo.png');
    this.load.image('botonMusica', 'assets/MenuPrincipal/Botones/botonSonido.png');
    this.load.image('botonIdiomaEspañol', 'assets/MenuPrincipal/bandera.png');

    this.load.image('mapaArgentina', 'assets/Mapa/mapa.png');
    this.load.image('botonMenuPpal', 'assets/MenuPrincipal/Botones/botonMenu.png')
  }

  create(){
    fondoMenu = this.add.image(683, 384, 'menu').setScale(0.75);
    buttonPlay = this.add.image(900, 650, 'botonPlay')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa'))

    buttonPremio = this.add.image(700, 650, 'botonDesbloqueable');
    buttonInfo = this.add.image(500, 650, 'botonInfo');
    buttonMusica = this.add.image(90, 90, 'botonMusica').setScale(0.7);
    banderaArg = this.add.image(90, 200, 'botonIdiomaEspañol').setScale(0.2);
  }

  update(){

  }
}