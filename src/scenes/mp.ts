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
    this.load.image('botonReset', 'assets/MenuPrincipal/Botones/botonReset.png');
    this.load.image('botonMapa', 'assets/MenuPrincipal/Botones/botonMapa.png');    
    this.load.image('botonatras', 'assets/MenuPrincipal/Botones/botonAtras.png');
    this.load.image('botonPausa', 'assets/MenuPrincipal/Botones/botonPausa.png');
    this.load.image('botonIdiomaEspañol', 'assets/MenuPrincipal/bandera.png');

    this.load.image('mapaArgentina', 'assets/Mapa/mapa.png');
    this.load.image('botonMenuPpal', 'assets/MenuPrincipal/Botones/botonMenu.png');

    this.load.audio('sonidoBoton', 'audio/boton.mp3')

                    //FONDO
    this.load.image('fondoLimpio', 'assets/MenuPrincipal/fondoLimpio.png');
             //Menu ayuda
    this.load.image('menuAyuda','assets/MenuPrincipal/MenuAyuda.png');
              //Menu creditos
    this.load.image('menuCreditos','assets/MenuPrincipal/MenuCreditos.png');
             //Botones de desbloqueables
    this.load.image('botonYaguarete', 'assets/MenuPrincipal/Botones/1erDesbloqueable.png');
    this.load.image('botonMono', 'assets/MenuPrincipal/Botones/2doDesbloqueable.png');
    this.load.image('botonCondor', 'assets/MenuPrincipal/Botones/3erDesbloqueable.png');
    this.load.image('botonBallena', 'assets/MenuPrincipal/Botones/4toDesbloqueable.png');
    this.load.image('botonPinguino', 'assets/MenuPrincipal/Botones/5toDesbloqueable.png');
    this.load.image('infoYaguarete', 'assets/MenuPrincipal/Botones/infoYaguarete1.png');
    this.load.image('infoMono', 'assets/MenuPrincipal/Botones/infoMono1.png');
    this.load.image('infoCondor', 'assets/MenuPrincipal/Botones/infoCondor1.png');
    this.load.image('infoBallena', 'assets/MenuPrincipal/Botones/infoBallena1.png');
    this.load.image('infoPinguino', 'assets/MenuPrincipal/Botones/infoPinguino1.png');

    //Botones GameWin/Lose
    /* this.load.image('botonRestart', '/public/assets/MenuPrincipal/Botones/') */           
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');

    //Fondo del Mp
    const fondoMenu = this.add.image(683, 384, 'menu').setScale(0.75);

    //Boton Play
    const buttonPlay = this.add.image(900, 650, 'botonPlay')
    .setInteractive()
    .on('pointerover', () => buttonPlay.setScale(1.1))
    .on('pointerout', () => buttonPlay.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuMapa') && sonidoButton.play({volume:0.5})
    });

    //Boton Premio
    const buttonPremio = this.add.image(700, 650, 'botonDesbloqueable')
    .setInteractive()
    .on('pointerover', () => buttonPremio.setScale(1.1))
    .on('pointerout', () => buttonPremio.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('extras') && sonidoButton.play({volume:0.5})
    });

    //Boton Info
    const buttonInfo = this.add.image(500, 650, 'botonInfo')
    .setInteractive()
    .on('pointerover', () => buttonInfo.setScale(1.1))
    .on('pointerout', () => buttonInfo.setScale(1))
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