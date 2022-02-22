import Phaser from 'phaser'
import { getPhrase } from '~/services/translation'
export default class popUpMapa extends Phaser.Scene
{  
  //yaguarete
  private cantidadEstrellasYagua:any
  private estrellaMasAltaYagua : number =0
  private textoYaguarete
  private contadorEntrarNivel1:number=0 
  private cerrarBonusYaguarete:number=0 
  private btn:any
  //pinguino
  private cantidadEstrellasPingui:any
  private estrellaMasAltaPingui : number =0  
  private textoPinguino   
  private contadorEntrarNivel5:number=0
  private cerrarBonusPinguino:number=0   
  //mono
  private cantidadEstrellasMono : any
  private estrellaMasAltaMono : number =0  
  private textoMono   
  private contadorEntrarNivel2:number=0
  private cerrarBonusMono:number=0

  private fuenteTextoMapaDesbloqueado =     
  {fontFamily: 'Titan One',
  fontSize: '40pt',
  color: '#FFBD0D',
  stroke: '#00572f',
  strokeThickness: 6,
  align: 'justify',
  };

  private fuenteTextoMapa =     
  {fontFamily: 'Titan One',
  fontSize: '40pt',
  color: '#9b9b9b',
  stroke: '#000000',
  strokeThickness: 4,
  align: 'justify',
  };
  private estadoMusica:any;
  private sonidoButton:any;
  public sfxDetenido()
  {
    this.sonidoButton.stop()
  }
  public sfxPlay()
  {
    this.sonidoButton.play({volume:0.5})
  }
  
  
  constructor()
  {
    super('popUpMapa');
  }
  
  // texto yaguarete
  public yaguareteBonus(text:any)
  {
    this.textoYaguarete = text
  }
  
  //texto pinguino
  public pinguinoNivel(text:any)
  {
    this.textoPinguino = text
  }
  public pinguinoBonus(text:any)
  {
    this.textoPinguino = text
  }
  
  //texto mono
  public monoNivel(text:any)
  {
    this.textoMono = text
  }
  public monoBonus(text:any)
  {
    this.textoMono = text
  }
  public ganar()
  {      
    this.textoYaguarete
    this.textoPinguino
    this.textoMono              
  }
  
  create()
  {
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    this.sonidoButton = this.sound.add('sonidoBoton');  
    this.add.image(680, 350, 'popUpMapaNiveles').setScale(0.7).setDepth(-1);
    const buttonAtras = this.add.image(900, 250, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop() 
      this.scene.resume('menuMapa') 
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
    });     
  }  

  public mostrarNiveles(info:string)
  {
    /////////////////////////////////// YAGUARETÉ////////////////////////////////
    if (info=='yaguareteNiveles') 
    {
      this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';  
    
      if (this.cantidadEstrellasYagua>this.estrellaMasAltaYagua) 
      {
        this.estrellaMasAltaYagua = this.cantidadEstrellasYagua
      }      

      const nivelPpalYagua = this.add.text(670, 400, getPhrase('PRINCIPAL'), this.fuenteTextoMapaDesbloqueado)
      .setInteractive()
      nivelPpalYagua.on('pointerover', () => nivelPpalYagua.setScale(1.1))
      .on('pointerout', () => nivelPpalYagua.setScale(1))
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
      {
        this.scene.sleep('menuMapa')  
        this.scene.start('nivelYaguarete')  
        if (this.estadoMusica=='1') 
        {
          this.sfxPlay()
        }
        this.scene.get('menuMapa').detenerMusica()
      })

      this.add.sprite(650, 280, 'estrellas', this.estrellaMasAltaYagua).setScale(1.8) 

      this.yaguareteBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapa))  
      
      if (this.contadorEntrarNivel1>0 && this.cerrarBonusYaguarete>0)
      {       
        this.yaguareteBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapa)
        .removeInteractive())  
      }  
      else if(this.contadorEntrarNivel1>0 && this.cerrarBonusYaguarete<1)
      {
        this.yaguareteBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapaDesbloqueado)
        
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
        {  
          this.scene.start('nivelBonus') 
          if (this.estadoMusica=='1') 
          {
            this.sfxPlay()
          }
          this.scene.get('menuMapa').detenerMusica()
        }))            
      }     
    } 

    ///////////////////////////////////PINGÜINO//////////////////
 
    if (info=='pinguinoNiveles')
    {
      this.cantidadEstrellasPingui = localStorage.getItem('estrellasPingui') || '1';  
    
      if (this.cantidadEstrellasPingui>this.estrellaMasAltaPingui) 
      {
        this.estrellaMasAltaPingui = this.cantidadEstrellasPingui
      }            

      this.pinguinoNivel(this.add.text(670, 400, getPhrase('PRINCIPAL'), this.fuenteTextoMapa) &&

      this.add.sprite(650, 280, 'estrellas', this.estrellaMasAltaPingui).setScale(1.8) && 
      
      this.pinguinoBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapa)))

      if (this.estrellaMasAltaMono>=0) 
      {
        this.pinguinoNivel(this.add.text(670, 400, getPhrase('PRINCIPAL'), this.fuenteTextoMapaDesbloqueado)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
        {
          this.scene.sleep('menuMapa') /* duermo el mapa para guardar datos */ 
          this.scene.start('nivelPinguino') 
          if (this.estadoMusica=='1') 
          {
          this.sfxPlay()
          }
          this.scene.get('menuMapa').detenerMusica()
        }).setDepth(7).setVisible(true)) 
      }

      if (this.contadorEntrarNivel5==0 && this.cerrarBonusPinguino>0)
      {
        this.pinguinoBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapa)
        .removeInteractive())
      }
      else if (this.contadorEntrarNivel5>0 && this.cerrarBonusPinguino<1)
      {
        this.pinguinoBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapaDesbloqueado)
        .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
        { 
          this.scene.start('nivelBonusPin') 
          if (this.estadoMusica=='1') 
          {
            this.sfxPlay()
          }
          this.scene.get('menuMapa').detenerMusica()
        }).setDepth(7).setVisible(true))
      }
    }

    ///////////////////////////////////MONO/////////////////////

    if (info=='monoNiveles') 
    {
      this.cantidadEstrellasMono = localStorage.getItem('estrellasMono') || '1';  
    
      if (this.cantidadEstrellasMono>this.estrellaMasAltaMono) 
      {
        this.estrellaMasAltaMono = this.cantidadEstrellasMono
      }
      

      this.monoNivel(this.add.text(670, 400, getPhrase('PRINCIPAL'), this.fuenteTextoMapa) &&

      this.add.sprite(650, 280, 'estrellas', this.estrellaMasAltaPingui).setScale(1.8) && 
      
      this.monoBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapa)))

      if (this.estrellaMasAltaYagua>=0) 
      {
        this.monoNivel(this.add.text(670, 400, getPhrase('PRINCIPAL'), this.fuenteTextoMapaDesbloqueado)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
        {
          this.scene.sleep('menuMapa')          
          this.scene.start('nivelMono') 
          if (this.estadoMusica=='1') 
          {
            this.sfxPlay()
          }
          this.scene.get('menuMapa').detenerMusica()
        }).setDepth(7).setVisible(true)) 
      }

      if (this.contadorEntrarNivel2==0 && this.cerrarBonusMono>0)
      {
        this.monoBonus(this.add.text(450, 400, 'BONUS', this.fuenteTextoMapa)
        .removeInteractive())
      }
      else if (this.contadorEntrarNivel2>0 && this.cerrarBonusMono<1)
      {
        this.monoBonus(this.add.text(420, 400, 'BONUS', this.fuenteTextoMapaDesbloqueado)
        .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
        { 
          this.scene.start('nivelBonusMono') 
          if (this.estadoMusica=='1') 
          {
            this.sfxPlay()
          }
          this.scene.get('menuMapa').detenerMusica()
        }).setDepth(7).setVisible(true))
      }
    }
  }
  /////////////////////// NIVEL 1 + Bonus //////////////////

  public aumentaContador1()
  {
    this.contadorEntrarNivel1++    
  } 
  public yaEntroBonusYaguarete()
  {
    this.cerrarBonusYaguarete++     
  }

  /////////////////////// NIVEL 2 + Bonus //////////////////
  public aumentaContador2()
  {
    this.contadorEntrarNivel2++
  }  
  public yaEntroBonusMono()
  {
    this.cerrarBonusMono++
  }
  /////////////////////// NIVEL 5 + Bonus //////////////////
  
  public aumentaContador5()
  {
    this.contadorEntrarNivel5++
  }  
  public yaEntroBonusPinguino()
  {
    this.cerrarBonusPinguino++
  }
}

