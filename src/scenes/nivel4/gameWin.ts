import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class gameWinBallena extends Phaser.Scene{
  private cantidadEstrellasBallena: any
  private contadorEntrarNivel4:number=0
  private estadoMusica:any
  private musicaWin:any
  private fuenteTexto =  {
    fontFamily: 'Titan One',
    fontSize: '50pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
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
  public musicaPlay()
  {
    this.musicaWin.play({volume:0.2})
  } 
  
  public detenerMusica()
  {  
    this.musicaWin.stop()            
  }
  constructor()
  {
    super('gameWinBallena');
  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
  }
  
  create()
  {
    this.sonidoButton = this.sound.add('sonidoBoton');
    this.musicaWin= this.sound.add('win')
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()
    }
    this.add.image(683, 384, 'win')
    this.add.text(550, 150, getPhrase('Victoria'), this.fuenteTexto);

    const buttonMapa = this.add.image(700, 590, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.get("popUpMapa").ganar()
      this.scene.stop('nivelBallena_2')
      this.scene.start('menuMapa')
      if (this.estadoMusica=='1')
      {
        this.sfxPlay()
      }
      
      if (this.contadorEntrarNivel4>0 && this.contadorEntrarNivel4<2)
      {
        this.scene.launch('popUpInformativo') 
        this.scene.get('popUpInformativo').mostrarInfoNiveles('bonusBallenaDesbloqueado')
      } 
    });

    this.cantidadEstrellasBallena = localStorage.getItem('estrellasBallena') || '1';
    this.cantidadCiertaEstrellasBallena=0 

    if (this.cantidadEstrellasBallena==2) 
    {
      this.add.sprite(675, 450, 'estrellas', 2).setDepth(7)
      this.cantidadCiertaEstrellasBallena=2

    }else if (this.cantidadEstrellasBallena==3) 
    {
      this.add.sprite(675, 450, 'estrellas', 3).setDepth(7)
      this.cantidadCiertaEstrellasBallena=3
    } else
    {
      this.add.sprite(675, 450, 'estrellas', 1).setDepth(7)
      this.cantidadCiertaEstrellasBallena=1
    }
  }
    
  public aumentaContador4()
  {
    this.contadorEntrarNivel4++
  }
}