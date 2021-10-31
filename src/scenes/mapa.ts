import Phaser from 'phaser'
export default class mapa extends Phaser.Scene
{
  private cantidadEstrellasYagua:any
  private cantidadEstrellasPingui:any
  private estrellaMasAltaYagua : number =0
  private estrellaMasAltaPingui : number =0
    

  constructor(){
    super ('menuMapa');
  }

  preload(){
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('fondoMapa', 'assets/Mapa/fondoMapa.png');
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:196 , frameHeight:114 });
    this.load.image('nivelBonus', 'assets/Mapa/NivelBonus.png');
  }

  create(){
    const fondo_Mapa = this.add.image(600, 350, 'fondoMapa');

    const mapaArg = this.add.image(750, 384, 'mapaArgentina');

    const buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerover', () => buttonMenu.setScale(0.8))
    .on('pointerout', () => buttonMenu.setScale(0.7))
    .on('pointerdown', () => this.scene.start('menuPpal'));

    const buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)

    //////////////////////////////////////////////ESTRELLAS GANADAS //////////////////////////////////////////////
    const textoEstrellasTotal = this.add.text(850, 625, 'Estrellas', {fontSize: '65px bold', color: 'black'})

    const estrellasTotales = this.add.sprite(1200, 650, 'estrellas', 3).setDepth(7).setScale(1.2)
    //////////////////////////////////////////////NIVEL YAGUARETE////////////////////////////////////////////// 
    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';  
    
    if (this.cantidadEstrellasYagua>this.estrellaMasAltaYagua) 
    {
      this.estrellaMasAltaYagua = this.cantidadEstrellasYagua
    }
    this.add.sprite(1137, 195, 'estrellas', this.estrellaMasAltaYagua).setDepth(7).setScale(0.8);
    
    const buttonNivel1 = this.add.image(1130, 170, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel1.setScale(0.28))
    .on('pointerout', () => buttonNivel1.setScale(0.25))
    .on('pointerdown', () => this.scene.launch('popUpMapa')
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
    const buttonNivel2 = this.add.image(420,80, 'botonNivel').setScale(0.25)

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
    this.add.sprite(387, 675, 'estrellas', this.estrellaMasAltaPingui).setDepth(7).setScale(0.8);

    const buttonNivel5 = this.add.image(380,650, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel5.setScale(0.28))
    .on('pointerout', () => buttonNivel5.setScale(0.25))
    .on('pointerdown', () => this.scene.launch('popUpMapa')
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
    
  }
}