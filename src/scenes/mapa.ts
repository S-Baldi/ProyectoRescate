import Phaser from 'phaser'
import gameWin from './nivel1/gameWin';
export default class mapa extends Phaser.Scene
{
  private cantidadEstrellasYagua:any
  private estrellaMasAlta : number =0
  constructor(){
    super ('menuMapa');
  }
  

  preload(){
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('fondoMapa', 'assets/Mapa/fondoMapa.png');
    this.load.spritesheet('estrellasYaguarete','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
    this.load.image('nivelBonus', 'assets/Mapa/NivelBonus.png');
  }
  private textoYaguarete
  private cantidadCiertaEstrellas:any
  private contadorEntrarNivel:number=0 

  public yaguareteBonus(text:any)
  {
    this.textoYaguarete = text
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

    //NIVEL YAGUARETE 
    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';  
    
    if (this.cantidadEstrellasYagua>this.estrellaMasAlta) 
    {
      this.estrellaMasAlta = this.cantidadEstrellasYagua
    }
    this.add.sprite(1137, 195, 'estrellasYaguarete', this.estrellaMasAlta).setDepth(7).setScale(0.8);
    
    const buttonNivel1 = this.add.image(1130, 170, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel1.setScale(0.28))
    .on('pointerout', () => buttonNivel1.setScale(0.25))
    .on('pointerdown', () => 
      this.add.image(900, 250, 'botonatras')
      .setScale(0.5)
      .setDepth(10)
      .setInteractive() &&

      this.add.image(680, 350, 'botonNivel').setScale(0.7) &&

      this.add.text(680, 400, '   NIVEL \nPRINCIPAL', {fontSize: '45px bold', color: 'black'})
      .setInteractive().on('pointerdown', () => this.scene.sleep('menuMapa') /* duermo el mapa para guardar datos */ &&  this.scene.start('nivelYaguarete'))  &&

      this.matter.add.sprite(720, 280, 'estrellasYaguarete', undefined, {
      isStatic:true
      }).setScale(1.8) && 
      this.yaguareteBonus(this.add.text(450, 400, ' NIVEL \nBONUS', {fontSize:'45px bold', color: 'gray'}))         
    ) 
    buttonNivel1.on('pointerdown', () => {this.activarBotonNivel1(true)})

    this.add.text(1030,115, 'YAGUARETÉ', {
      fontSize: '250px bold',
      color: 'yellow',
      stroke: 'green',
      strokeThickness: 4,
      font: '23pt ARCO',
    })

    
    
    //NIVEL MONO
    const buttonNivel2 = this.add.image(420,80, 'botonNivel').setScale(0.25)

    this.add.text(320, 25, 'MONO CAPUCHINO', {
      fontSize: '250px bold',
      color: 'yellow',
      stroke: 'green',
      strokeThickness: 4,
      font: '16pt ARCO',
    })
    

    //NIVEL CONDOR
    const buttonNivel3 = this.add.image(360,300, 'botonNivel').setScale(0.25)

    this.add.text(251,330, 'PRÓXIMAMENTE', {
      fontSize: '700px',
      color: 'grey',
      stroke: 'black',
      strokeThickness: 4,
      font: '19pt ARCO Regular',
      
    }).angle = -25;

    //NIVEL BALLENA
    const buttonNivel4 = this.add.image(980,470, 'botonNivel').setScale(0.25)

    this.add.text(871,500, 'PRÓXIMAMENTE', {
      fontSize: '25px',
      color: 'grey',
      stroke: 'black',
      strokeThickness: 4,
      font: '19pt ARCO Regular',
    }).angle = -25;


    //NIVEL PINGUINO
    const buttonNivel5 = this.add.image(380,650, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerover', () => buttonNivel5.setScale(0.28))
    .on('pointerout', () => buttonNivel5.setScale(0.25))
    .on('pointerdown', () => this.scene.start('nivelPinguino'))

    this.add.text(295,595, 'PINGÜINO', {
      fontSize: '250px bold',
      color: 'yellow',
      stroke: 'green',
      strokeThickness: 4,
      font: '23pt ARCO',
    })
  }
  public activarBotonNivel1(visible:boolean)
  {
    if (this.contadorEntrarNivel>0)
    {
      this.yaguareteBonus(this.add.text(450, 400, ' NIVEL \nBONUS', {fontSize:'45px bold', color: 'black'})
      .setInteractive().on('pointerdown', () => this.scene.start('nivelBonus')).setDepth(7).setVisible(visible))
    }
  }
  public aumentaContador()
  {
    this.contadorEntrarNivel++
  }

  public ganarYaguarete()
  {      
    this.textoYaguarete              
  }
  
  update()
  {
    
  }
}