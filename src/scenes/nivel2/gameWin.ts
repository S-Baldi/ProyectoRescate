import Phaser from 'phaser'
import UI from '../nivel1/UI'; 
import {sharedInstance as events} from '../eventCenter'

export default class gameWinMono extends Phaser.Scene{
  private cantidadEstrellasMono: any
  private cantidadCiertaEstrellasMono: any
  private contadorEntrarNivel2:number=0
  constructor()
  {
    super('gameWinMono');
  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
  }
  
  create(){  
    this.add.image(683, 384, 'win')

    const buttonRestart = this.add.image(800, 590,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelMono')
      this.scene.start('nivelMono')
    });

    const buttonMapa = this.add.image(600, 590, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.get("popUpMapa").ganar()
      this.scene.stop('nivelMono')
      this.scene.start('menuMapa')
      
      if (this.contadorEntrarNivel2>0 && this.contadorEntrarNivel2<2) 
      {
        this.scene.launch('popUpInformativo') 
        this.scene.get('popUpInformativo').mostrarInfoNiveles('bonusMonoDesbloqueado')
      } 
    });

    this.cantidadEstrellasMono = localStorage.getItem('estrellasMono') || '1';
    this.cantidadCiertaEstrellasMono=0 

    if (this.cantidadEstrellasMono==2) 
    {
      this.add.sprite(675, 450, 'estrellas', 2).setDepth(7)
      this.cantidadCiertaEstrellasMono=2

    }else if (this.cantidadEstrellasMono==3) 
    {
      this.add.sprite(675, 450, 'estrellas', 3).setDepth(7)
      this.cantidadCiertaEstrellasMono=3
    } else
    {
      this.add.sprite(675, 450, 'estrellas', 1).setDepth(7)
      this.cantidadCiertaEstrellasMono=1
    }
  } 
  
  public aumentaContador2()
  {
    this.contadorEntrarNivel2++
  }  

}