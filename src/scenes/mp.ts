import Phaser from 'phaser'
//IMPORTAMOS WEB FONT FILE
import WebFontFile from './webFontLoader';
export default class mp1 extends Phaser.Scene
{  
  public musicaMP:any  
  private estadoMusica:any; 

  public detenerMusica()
  {    
    this.musicaMP.stop()          
  }
  
  public musicaPlay()
  {
    this.musicaMP.play({volume:0.05, loop: true})    
  }

  constructor()
  {
    super('menuPpal');    
  } 

  preload()
  {    
    //////////Musica Mapa  
    this.load.audio('musicaMapa3', 'audio/boton.mp3')

    //CARGAMOS EN UN ARRAY TODAS LAS FUENTES QUE SE QUIEREN PARA EL JUEGO
    this.load.addFile(new WebFontFile(this.load, [
      'Titan One',
      'Viga'
    ]))         
  }
  
  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    this.musicaMP= this.sound.add('musicaMP4')  
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()    
    }  

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
      this.scene.start('informacion') && sonidoButton.play({volume:0.5})
    });

    let n=0
    let b=0
    const buttonMusica = this.add.image(90, 90, 'botonMusica').setScale(0.7)
    .setInteractive()
    .on('pointerover', () => buttonMusica.setScale(0.8))
    .on('pointerout', () => buttonMusica.setScale(0.7))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {   
      if(this.estadoMusica == '1')
      {
        this.estadoMusica = '0' 
        localStorage.setItem('musicaPlay', '0')
        this.detenerMusica() 
      } 
      else if (this.estadoMusica == '0') 
      {
        this.estadoMusica = '1'
        localStorage.setItem('musicaPlay', '1')
        this.musicaPlay()
      }
      
      sonidoButton.play({volume:0.5})
    });  
    
    const banderaArg = this.add.image(90, 200, 'botonIdiomaEspañol').setScale(0.2);

  }

  update()
  {
    
  }
}