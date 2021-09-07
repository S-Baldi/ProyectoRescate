import Phaser from 'phaser'
export default class mp1 extends Phaser.Scene
{
  constructor()
  {
    super('menuPpal');
  }

  preload()
  {
    this.load.image('menu', 'assets/MenuPrincipal/menuPpal.png');
    this.load.image('botonPlay', 'assets/MenuPrincipal/Botones/botonPlay.png');
    this.load.image('botonPlay2', 'assets/MenuPrincipal/Botones/botonPlay2.png');
    this.load.image('botonDesbloqueable', 'assets/MenuPrincipal/Botones/botonDesbloqueable.png');
    this.load.image('botonInfo', 'assets/MenuPrincipal/Botones/botonInfo.png');
    this.load.image('botonMusica', 'assets/MenuPrincipal/Botones/botonSonido.png');
    this.load.image('botonIdiomaEspañol', 'assets/MenuPrincipal/bandera.png');

    this.load.image('mapaArgentina', 'assets/Mapa/mapa.png');
    this.load.image('botonMenuPpal', 'assets/MenuPrincipal/Botones/botonMenu.png')

    this.load.audio('sonidoBoton', 'audio/boton.mp3')

    //Menu info
    this.load.image('fondoinfo', 'assets/MenuPrincipal/INFO.png');
    this.load.image('botonayuda', 'assets/MenuPrincipal/Botones/AYUDA.png');
    this.load.image('botoncreditos', 'assets/MenuPrincipal/Botones/CREDITOS.png');
    this.load.image('botonatras', 'assets/MenuPrincipal/Botones/atras.png');
              //Menu ayuda
    this.load.image('menuAyuda','assets/MenuPrincipal/MenuAyuda.png');
              //Menu Creditos
    this.load.image('menuCreditos','assets/MenuPrincipal/MenuCreditos.png');
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');

    //Fondo del Mp
    const fondoMenu = this.add.image(683, 384, 'menu').setScale(0.75);

    //Boton Play
    const buttonPlay = this.add.image(900, 650, 'botonPlay')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuMapa') && sonidoButton.play({volume:0.5})
    });

    //Boton Premio
    const buttonPremio = this.add.image(700, 650, 'botonDesbloqueable')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('premio') && sonidoButton.play({volume:0.5})
    });

    //Boton Info
    const buttonInfo = this.add.image(500, 650, 'botonInfo')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    { 
      this.scene.start('informacion')
    });

    
    const buttonMusica = this.add.image(90, 90, 'botonMusica').setScale(0.7);
    const banderaArg = this.add.image(90, 200, 'botonIdiomaEspañol').setScale(0.2);

  }

  update()
  {

  }
}