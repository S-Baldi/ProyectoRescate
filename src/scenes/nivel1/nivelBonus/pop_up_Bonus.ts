import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';
export default class pop_up extends Phaser.Scene{
  
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '35pt',
  color: '#000000',
  align: 'justify'
  };
  private contadorEntrarNivel1:number=0
  private estadoMusica:any
  private musicaWin:any
  private musicaLose:any
  public musicaPlayWin()
  {
    this.musicaWin.play({volume:0.2})
  } 
  public musicaPlayLose()
  {
    this.musicaLose.play({volume:0.2})
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

  constructor()
  {
    super('pop_up_B');
  }

  preload()
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('botonMapa', 'assets/MenuPrincipal/Botones/botonMenu.png');    
  }
  
  create()
  {
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    this.sonidoButton = this.sound.add('sonidoBoton');
    this.scene.get('nivelBonus').detenerMusica()
    this.musicaWin= this.sound.add('win');
    this.musicaLose= this.sound.add('lose');
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';

    
    
    const fondoPopUpBonus = this.add.image(680, 250, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.image(680, 350, 'botonMapa')
    .setInteractive()  
    .on('pointerover', () => volverMapa.setScale(1.1))
    .on('pointerout', () => volverMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>     
    {
      this.scene.start('menuMapa')
      this.scene.stop('nivelBonus')
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      if (this.contadorEntrarNivel1>0 && this.contadorEntrarNivel1<2) 
      {
        this.scene.launch('popUpInformativo')
        this.scene.get('popUpInformativo').mostrarInfoNiveles('nivelMonoDesbloqueado')
      }
    
    })     
  }
  
  public mostrar_Texto(rta:string)
  {
    console.log(this)
    if (rta=='green')
    {  
      this.add.text(480, 90, getPhrase('Respuesta Correcta'), this.fuenteTexto).setDepth(3)
      this.add.sprite(680, 205, 'estrellaBonus', 1).setDepth(3).setScale(0.6)
      localStorage.setItem('estrellasYaguareteBonus', '1')       
      /* if (this.estadoMusica=='1') 
      {
        this.musicaPlayWin()
      } */
    }
    else
    {  
      this.add.text(460, 90, getPhrase('Respuesta Incorrecta'), this.fuenteTexto).setDepth(3) //esto trae hacia delante o atras las cosas
      this.add.sprite(680, 205, 'estrellaBonus', 0).setDepth(3).setScale(0.6);
      /* if (this.estadoMusica=='1') 
      {
        this.musicaPlayLose()
      } */
    }
    this.scene.get('popUpMapa').yaEntroBonusYaguarete()
    
    return rta

  }
  public aumentaContador1()
  {
    this.contadorEntrarNivel1++
    console.log('this.contadorEntrarNivel1')    
  }

}

