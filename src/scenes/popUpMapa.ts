import Phaser from 'phaser'

export default class popUpMapa extends Phaser.Scene
{  
  //yaguarete
  private cantidadEstrellasYagua:any
  private estrellaMasAltaYagua : number =0
  private textoYaguarete
  private contadorEntrarNivel1:number=0 
  //pinguino
  private cantidadEstrellasPingui:any
  private estrellaMasAltaPingui : number =0  
  private textoPinguino   
  private contadorEntrarNivel2:number=0  
  
  private fuenteTextoMapaDesbloqueado =     
  {fontFamily: 'Viga',
  fontSize: '40pt',
  color: '#FFBD0D',
  stroke: '#00572f',
  strokeThickness: 6,
  align: 'justify',
  };

  private fuenteTextoMapa =     
  {fontFamily: 'Viga',
  fontSize: '40pt',
  color: '#9b9b9b',
  stroke: '#000000',
  strokeThickness: 4,
  align: 'justify',
  };

  constructor()
  {
    super('popUpMapa');
  }

  public yaguareteBonus(text:any)
  {
    this.textoYaguarete = text
  }
  public pinguinoNivel(text:any)
  {
    this.textoPinguino = text
  }
  public pinguinoBonus(text:any)
  {
    this.textoPinguino = text
  }
  public ganar()
  {      
    this.textoYaguarete
    this.textoPinguino              
  }

  preload()
  {
    this.load.image('popUpMapaNiveles', 'assets/MenuPrincipal/popUp.png')
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:196 , frameHeight:114 });
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
  }
  
  create()
  {
    this.add.image(680, 350, 'popUpMapaNiveles').setScale(0.7).setDepth(-1);
    const buttonAtras = this.add.image(900, 250, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('menuMapa'));    
  }  

  public mostrarNiveles(info:string)
  {
    if (info=='yaguareteNiveles') 
    {
      this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';  
    
      if (this.cantidadEstrellasYagua>this.estrellaMasAltaYagua) 
      {
        this.estrellaMasAltaYagua = this.cantidadEstrellasYagua
      }
      this.add.sprite(1137, 195, 'estrellas', this.estrellaMasAltaYagua).setDepth(7).setScale(0.8);      

      const nivelPpalYagua = this.add.text(680, 400, '   NIVEL \nPRINCIPAL', this.fuenteTextoMapaDesbloqueado)
      .setInteractive()
      nivelPpalYagua.on('pointerover', () => nivelPpalYagua.setScale(1.1))
      .on('pointerout', () => nivelPpalYagua.setScale(1))
      .on('pointerdown', () => this.scene.sleep('menuMapa') && 

      this.scene.start('nivelYaguarete'))  &&

      this.add.sprite(650, 280, 'estrellas', this.estrellaMasAltaYagua).setScale(1.8) && 

      this.yaguareteBonus(this.add.text(450, 400, ' NIVEL \nBONUS', this.fuenteTextoMapa))  
      
      if (this.contadorEntrarNivel1>0)
      {
        this.yaguareteBonus(this.add.text(450, 400, ' NIVEL \nBONUS', this.fuenteTextoMapaDesbloqueado)
        .setInteractive().on('pointerdown', () => this.scene.start('nivelBonus'))) 
              
      }     
    } 

    else if (info=='pinguinoNiveles')
    {
      this.cantidadEstrellasPingui = localStorage.getItem('estrellasPingui') || '1';  
    
      if (this.cantidadEstrellasPingui>this.estrellaMasAltaPingui) 
      {
        this.estrellaMasAltaPingui = this.cantidadEstrellasPingui
      }
      this.add.sprite(387, 675, 'estrellas', this.estrellaMasAltaPingui).setDepth(7).setScale(0.8);      

      this.pinguinoNivel(this.add.text(680, 400, '   NIVEL \nPRINCIPAL', this.fuenteTextoMapa) &&

      this.add.sprite(650, 280, 'estrellas', this.estrellaMasAltaPingui).setScale(1.8) && 
      
      this.pinguinoBonus(this.add.text(450, 400, ' NIVEL \nBONUS', this.fuenteTextoMapa)))

      if (this.estrellaMasAltaYagua>0) 
      {
        this.pinguinoNivel(this.add.text(680, 400, '   NIVEL \nPRINCIPAL', this.fuenteTextoMapaDesbloqueado)
        .setInteractive()
        .on('pointerdown', () => this.scene.sleep('menuMapa') /* duermo el mapa para guardar datos */ && 
        this.scene.start('nivelPinguino')).setDepth(7).setVisible(true)) 
      }

      if (this.contadorEntrarNivel2>0)
      {
        this.pinguinoBonus(this.add.text(450, 400, ' NIVEL \nBONUS', this.fuenteTextoMapaDesbloqueado)
        .setInteractive().on('pointerdown', () => this.scene.start('nivelBonusPin')).setDepth(7).setVisible(true))
      }

    }
  }
  /////////////////////// NIVEL 1 //////////////////
 
  public aumentaContador1()
  {
    this.contadorEntrarNivel1++    
  } 
  /////////////////////// NIVEL 5 ///////////////////////
  
  public aumentaContador2()
  {
    this.contadorEntrarNivel2++
  }  
 

  update()
  {

  }
}

