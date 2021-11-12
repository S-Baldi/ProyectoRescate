import Phaser from 'phaser';
import { getPhrase } from '~/services/translation';
export default class mapa extends Phaser.Scene
{
  //Yaguarete
  private cantidadEstrellasYagua
  private cantidadEstrellasYaguaBonus
  private estrellaMasAltaYagua : number = 0;
  
  //Pinguino
  private cantidadEstrellasPingui
  private cantidadEstrellasPinguiBonus
  private estrellaMasAltaPingui : number = 0;
    
  //Mono 
  private cantidadEstrellasMono : any
  private estrellaMasAltaMono : number =0  
  private cantidadEstrellasMonoBonus
  
  public musicaMapa:any
  private estadoMusica:any;
  
  public musicaPlay()
  {    
    this.musicaMapa.play({volume:0.05, loop: true})    
  }
  public detenerMusica()
  {  
    this.musicaMapa.stop()            
  }
  private sonidoButton:any;
  public sfxDetenido()
  {
    this.sonidoButton.stop()
  }
  public sfxPlay()
  {
    this.sonidoButton.play({volume:0.5})
  }
  //FUENTE
  private fuenteTexto = {
    fontFamily: 'Titan One',
    fontSize: '25pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }
  private fuenteTextoProx = {
    fontFamily: 'Titan One',
    fontSize: '18pt',
    color: 'grey',
    stroke: 'black',
    strokeThickness: 4,
  }
  private fuenteTextoYagua = {
    fontFamily: 'Titan One',
    fontSize: '22pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }
  constructor(){
    super ('menuMapa');
  }

  preload(){
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('fondoMapa', 'assets/Mapa/fondoMapa.png');
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:196 , frameHeight:114 });
    this.load.image('nivelBonus', 'assets/Mapa/NivelBonus.png');
    this.load.spritesheet('estrellaBonus', 'assets/Mapa/estrellasBonus.png',
    {frameWidth:202, frameHeight:190});
    this.load.image('popUpMapaNiveles', 'assets/MenuPrincipal/popUp.png')  
  }

  create()
  {
    
    this.sonidoButton = this.sound.add('sonidoBoton');
    
    this.musicaMapa= this.sound.add('musicaMapa') 
    
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()   
    }

    const fondo_Mapa = this.add.image(600, 350, 'fondoMapa');

    const mapaArg = this.add.image(750, 384, 'mapaArgentina');

    const buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerover', () => buttonMenu.setScale(0.8))
    .on('pointerout', () => buttonMenu.setScale(0.7))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuPpal')
      this.detenerMusica()
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
    });

    const buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)
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
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }   
    })
      

    //////////////////////////////////////////////ESTRELLAS GANADAS //////////////////////////////////////////////
    const estrellasTotales = this.add.sprite(1000, 650, 'estrellas', 3).setDepth(7).setScale(1.2)
    //////////////////////////////////////////////NIVEL YAGUARETE////////////////////////////////////////////// 
    
    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';  
    
    if (this.cantidadEstrellasYagua>this.estrellaMasAltaYagua) 
    {
      this.estrellaMasAltaYagua = this.cantidadEstrellasYagua
    }
    this.add.sprite(1137, 195, 'estrellas', this.estrellaMasAltaYagua).setDepth(7).setScale(0.8);

    this.cantidadEstrellasYaguaBonus= localStorage.getItem('estrellasYaguareteBonus') || '1'; 
    
    const buttonNivel1 = this.add.image(1130, 170, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel1.setScale(0.28))
    .on('pointerout', () => buttonNivel1.setScale(0.25))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.launch('popUpMapa')
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause() 
      this.scene.get("popUpMapa").mostrarNiveles('yaguareteNiveles')
    })
    
    this.add.text(1025,115, getPhrase('YAGUARETÉ'), this.fuenteTextoYagua)
    
    //////////////////////////////////////////////NIVEL MONO//////////////////////////////////////////////
    this.cantidadEstrellasMono = localStorage.getItem('estrellasMono') || '1';  
    
    if (this.cantidadEstrellasMono>this.estrellaMasAltaMono) 
    {
      this.estrellaMasAltaMono = this.cantidadEstrellasMono
    }
    this.add.sprite(420, 105, 'estrellas', this.estrellaMasAltaMono).setDepth(7).setScale(0.8);

    this.cantidadEstrellasMonoBonus= localStorage.getItem('estrellasMonoBonus') || '1';
    
    const buttonNivel2 = this.add.image(420,80, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel2.setScale(0.28))
    .on('pointerout', () => buttonNivel2.setScale(0.25))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    { 
      this.scene.launch('popUpMapa') 
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause() 
      this.scene.get("popUpMapa").mostrarNiveles('monoNiveles')
    })

    this.add.text(320, 25, getPhrase('MONO CAÍ'), this.fuenteTexto)
    

    //////////////////////////////////////////////NIVEL CONDOR//////////////////////////////////////////////
    const buttonNivel3 = this.add.image(360,300, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('nivelBonusMono')
    })

    this.add.text(251,330, getPhrase('PRÓXIMAMENTE'), this.fuenteTextoProx).angle = -25;

    //////////////////////////////////////////////NIVEL BALLENA//////////////////////////////////////////////
    const buttonNivel4 = this.add.image(980,470, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('nivelPinguino')
    })

    this.add.text(871,500, getPhrase('PRÓXIMAMENTE'), this.fuenteTextoProx).angle = -25;


    //////////////////////////////////////////////NIVEL PINGUINO//////////////////////////////////////////////
    this.cantidadEstrellasPingui = localStorage.getItem('estrellasPingui') || '1';  
    
    if (this.cantidadEstrellasPingui>this.estrellaMasAltaPingui) 
    {
      this.estrellaMasAltaPingui = this.cantidadEstrellasPingui
    }
    this.add.sprite(375, 675, 'estrellas', this.estrellaMasAltaPingui).setDepth(7).setScale(0.8);

    this.cantidadEstrellasPinguiBonus = localStorage.getItem('estrellasPinguinoBonus') || '1';

    const buttonNivel5 = this.add.image(380,650, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel5.setScale(0.28))
    .on('pointerout', () => buttonNivel5.setScale(0.25))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.launch('popUpMapa')
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause() 
      this.scene.get("popUpMapa").mostrarNiveles('pinguinoNiveles')
    })    
    

    this.add.text(295,595, getPhrase('PINGÜINO'), this.fuenteTexto)    
  } 
    
  update()
  {
    const estrellasTotales = +this.estrellaMasAltaPingui + +this.estrellaMasAltaYagua + 
    +this.cantidadEstrellasYaguaBonus + +this.cantidadEstrellasPinguiBonus + +this.estrellaMasAltaMono + +this.cantidadEstrellasMonoBonus
    /* console.log(this.estrellaMasAltaPingui, 'pinguino')
    console.log(this.estrellaMasAltaYagua, 'yaguarete')
    console.log(this.cantidadEstrellasYaguaBonus, 'yaguareteBonus')
    console.log(this.cantidadEstrellasPinguiBonus, 'pinguinoBonus')
    console.log(this.estrellaMasAltaMono, 'mono')
    console.log(this.cantidadEstrellasMonoBonus, 'monoBonus') */

    this.add.text(1140, 625,`= ` + estrellasTotales,  
    {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,    	
    })  
  }  
}