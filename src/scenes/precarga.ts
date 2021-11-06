import Phaser from 'phaser'
export default class Preload extends Phaser.Scene
{
  constructor()
  { 
    super('precarga');
  }
  preload()
  {
    this.load.image('logo', 'assets/MenuPrincipal/logo.png');
    this.load.image('phaser', 'assets/MenuPrincipal/logoPhaser.png');
    ///////////Menu Principal    
    this.load.audio('musicaMP4', 'audio/menuPrincipal/Op4MP.mp3');
    //////////// Botones sonido
    this.load.audio('sonidoBoton', 'audio/boton.mp3') 
    //////////// Todo del menu principal    
    this.load.image('menu', 'assets/MenuPrincipal/menuPpal.png');
    this.load.image('botonPlay', 'assets/MenuPrincipal/Botones/botonPlay.png');
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
    //Menu Limpio
    this.load.image('fondoLimpio', 'assets/MenuPrincipal/fondoLimpio.png')
              //Menu Informacion
    this.load.image('menuInfo', 'assets/MenuPrincipal/MenuInformacion.png');
             //Menu ayuda
    this.load.image('menuAyuda','assets/MenuPrincipal/MenuAyuda.png');
              //Menu creditos
    this.load.image('menuCreditos','assets/MenuPrincipal/MenuCreditos.png');
             //Botones de desbloqueables
    this.load.image('botonYaguarete', 'assets/MenuPrincipal/Botones/Extras/1erDesbloqueable.png');
    this.load.image('botonMono', 'assets/MenuPrincipal/Botones/Extras/2doDesbloqueable.png');
    this.load.image('botonCondor', 'assets/MenuPrincipal/Botones/Extras/3erDesbloqueable.png');
    this.load.image('botonBallena', 'assets/MenuPrincipal/Botones/Extras/4toDesbloqueable.png');
    this.load.image('botonPinguino', 'assets/MenuPrincipal/Botones/Extras/5toDesbloqueable.png');
    this.load.image('infoYaguarete', 'assets/MenuPrincipal/Botones/Extras/infoYaguarete1.png');
    this.load.image('infoMono', 'assets/MenuPrincipal/Botones/Extras/infoMono1.png');
    this.load.image('infoCondor', 'assets/MenuPrincipal/Botones/Extras/infoCondor1.png');
    this.load.image('infoBallena', 'assets/MenuPrincipal/Botones/Extras/infoBallena1.png');
    this.load.image('infoPinguino', 'assets/MenuPrincipal/Botones/Extras/infoPinguino1.png');
    ///////////////////////////////////////////////////MUSICA DE NIVELES
    ///////////Musica Yaguarete
    this.load.audio('musicaYaguarete1', 'audio/nivelYaguarete/Op1Yaguarete.mp3')
    ///////////Musica Mono
    this.load.audio('musicaMono1', 'audio/nivelMono/Op1Mono.mp3')

  }
  create()
  {
    const logo= this.add.image(683, 384, 'logo').setScale(1.5);    
  }
  update(time, delta)
  {
    time += delta
    if (time >= 2000 && time <=3000)
    {
      const logoPhaser= this.add.image(683, 384, 'phaser').setScale(2);
    }  
    else if (time>= 4000)
    {
      time = 0
      this.scene.start('menuPpal'); 
      console.log('entrar a mp')
    }
  }
}