import Phaser from 'phaser'
import {sharedInstance as events} from './eventCenter'
export default class mapa extends Phaser.Scene
{
  //Estrellas totales ganadas
  private cantidadEstrellasGanadas:any  
  private estrellasLabel!: Phaser.GameObjects.Text

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
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    const fondo_Mapa = this.add.image(600, 350, 'fondoMapa');

    const mapaArg = this.add.image(750, 384, 'mapaArgentina');

    const buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerover', () => buttonMenu.setScale(0.8))
    .on('pointerout', () => buttonMenu.setScale(0.7))
    .on('pointerdown', () => this.scene.start('menuPpal') && sonidoButton.play({volume:0.5}));

    const buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)

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
    .on('pointerdown', () => this.scene.launch('popUpMapa') && sonidoButton.play({volume:0.5})
    && this.scene.pause() 
    && this.scene.get("popUpMapa").mostrarNiveles('yaguareteNiveles'))
    
    this.add.text(1030,115, 'YAGUARETÉ', {
      fontFamily: 'Titan One', //COLOCAMOS LA FAMILIA DE LA FUENTE QUE QUEREMOS
      fontSize: '25pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })  
    
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
    .on('pointerdown', () => this.scene.launch('popUpMapa') && sonidoButton.play({volume:0.5})
    && this.scene.pause() 
    && this.scene.get("popUpMapa").mostrarNiveles('monoNiveles'))

    this.add.text(320, 25, 'MONO CAÍ', {
      fontFamily: 'Titan One',
      fontSize: '25pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
      align: 'center'
    })
    

    //////////////////////////////////////////////NIVEL CONDOR//////////////////////////////////////////////
    const buttonNivel3 = this.add.image(360,300, 'botonNivel').setScale(0.25)

    this.add.text(251,330, 'PRÓXIMAMENTE', {
      fontSize: '700px',
      color: 'grey',
      stroke: 'black',
      strokeThickness: 4,
      font: '19pt ARCO Regular',
      
    }).angle = -25;

    //////////////////////////////////////////////NIVEL BALLENA//////////////////////////////////////////////
    const buttonNivel4 = this.add.image(980,470, 'botonNivel').setScale(0.25)

    this.add.text(871,500, 'PRÓXIMAMENTE', {
      fontSize: '25px',
      color: 'grey',
      stroke: 'black',
      strokeThickness: 4,
      font: '19pt ARCO Regular',
    }).angle = -25;


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
    .on('pointerdown', () => this.scene.launch('popUpMapa') && sonidoButton.play({volume:0.5})
    && this.scene.pause() 
    && this.scene.get("popUpMapa").mostrarNiveles('pinguinoNiveles'))    
    

    this.add.text(295,595, 'PINGÜINO', {
      fontFamily: 'Titan One',
      fontSize: '25pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })    
  } 
    
  update()
  {
    const estrellasTotales = +this.estrellaMasAltaPingui + +this.estrellaMasAltaYagua + 
    +this.cantidadEstrellasYaguaBonus + +this.cantidadEstrellasPinguiBonus + +this.estrellaMasAltaMono + +this.cantidadEstrellasMonoBonus

    this.add.text(1140, 625,`= ` + estrellasTotales,  
    {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,    	
    })
    
    
  }  
}