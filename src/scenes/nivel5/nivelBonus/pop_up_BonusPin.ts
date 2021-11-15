import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';
export default class pop_up_Pingui extends Phaser.Scene{
  
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '35pt',
  color: '#000000',
  align: 'justify'
  };
  private estadoMusica:any

  private contadorEntrarNivel5:number=0
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
    super('pop_up_B_Pin');
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
    this.scene.get('nivelBonusPin').detenerMusica()
    
    const fondoPopUpBonus = this.add.image(680, 250, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.image(680, 350, 'botonMapa')
    .setInteractive()  
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {
      this.scene.start('menuMapa') 
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      } 
      this.scene.stop('nivelBonusPin')
    });
    //console.log(this.scene.start('menuMapa'))    
  }
  
  public mostrar_Texto(rta:string)
  {
    console.log(this)
    if (rta=='green')
    {
      this.add.text(480, 90, getPhrase('Respuesta Correcta'), this.fuenteTexto).setDepth(3)
      this.add.sprite(680, 205, 'estrellaBonus', 1).setDepth(3).setScale(0.6)
      localStorage.setItem('estrellasPinguinoBonus', '1')
    }
    else
    {
      this.add.text(460, 90, getPhrase('Respuesta Incorrecta'), this.fuenteTexto).setDepth(3) //esto trae hacia delante o atras las cosas
      this.add.sprite(680, 205, 'estrellaBonus', 0).setDepth(3).setScale(0.6)
    }
    this.scene.get('popUpMapa').yaEntroBonusPinguino()
    return rta
  }
  
  public aumentaContador5()
  {
    this.contadorEntrarNivel5++
    console.log('this.contadorEntrarNivel1')    
  }

  update()
  {

  }
}

