import Phaser from 'phaser'
export default class mapa extends Phaser.Scene
{
  
  constructor(){
    super ('menuMapa');
  }

  preload(){
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('fondoMapa', 'assets/Mapa/fondoMapa.png');
    this.load.spritesheet('estrellasYaguarete','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
    this.load.image('textYaguarete', 'assets/Mapa/mapaYagua.png');
    this.load.image('nivelBonus', 'assets/Mapa/NivelBonus.png');
  }
  private buttonNivel1
  private textoYaguarete

  public yaguareteBonus(text:any)
  {
    this.textoYaguarete = text
  }

  create(){
    const fondo_Mapa = this.add.image(600, 350, 'fondoMapa');

    const mapaArg = this.add.image(750, 384, 'mapaArgentina');

    const buttonMenu = this.add.image(65, 80, 'botonMenuPpal').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'));

    const buttonMusica = this.add.image(180, 80, 'botonMusica').setScale(0.7)

    //NIVEL YAGUARETE 

    this.buttonNivel1 = this.add.image(1130, 170, 'botonNivel').setScale(0.25)
    .setInteractive()

    .on('pointerdown', () => 
      this.add.image(680, 350, 'botonNivel').setScale(0.7) &&

      this.add.text(680, 400, '   NIVEL \nPRINCIPAL', {fontSize: '45px bold', color: 'black'})
      .setInteractive().on('pointerdown', () => this.scene.start('nivelYaguarete')) &&

      this.matter.add.sprite(720, 280, 'estrellasYaguarete', undefined, {
      isStatic:true
      }).setScale(1.8) &&

      this.yaguareteBonus(this.add.text(450, 400, ' NIVEL \nBONUS', {fontSize:'45px bold', color: 'gray'})
      .setInteractive().on('pointerdown', () => this.scene.start('nivelBonus')))
    )  

    var estrellas_Mapa : Phaser.Physics.Matter.Sprite = this.matter.add.sprite
    (1150,195, 'estrellasYaguarete', undefined, {
      isStatic: true
    }).setScale(0.8)

    //this.scene.start('nivelYaguarete'))
    const text_yagua = this.add.image(1122, 130, 'textYaguarete').setScale(0.8);  

    //NIVEL MONO
    const buttonNivel2 = this.add.image(420,80, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('nivelBonus'))

    //NIVEL CONDOR
    const buttonNivel3 = this.add.image(360,300, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('gameOver'))

    //NIVEL BALLENA
    const buttonNivel4 = this.add.image(980,470, 'botonNivel').setScale(0.25)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('gameWin'))

    //NIVEL PINGUINO
    const buttonNivel5 = this.add.image(380,650, 'botonNivel').setScale(0.25)
    /* .setInteractive()
    .on('pointerdown', () => this.scene.start('nivelPinguino')) */  
  }

  public ganarYaguarete()
  {      
    this.textoYaguarete              
  }
  
  update()
  {
    
  }
}