import Phaser from 'phaser'
import UI from './UI'; 
import {sharedInstance as events } from '../eventCenter'

export default class gameWin extends Phaser.Scene{
  private cantidadEstrellasYagua: any
  private cantidadCiertaEstrellasYaguarete: any
  private contadorEntrarNivel1:number=0
 
  constructor()
  {
    super('gameWin');
  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
    this.load.spritesheet('estrellas','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
  }
  
  create()
  {  
    const gameLose = this.add.image(683, 384, 'win')

    const buttonRestart = this.add.image(800, 590,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.start('nivelYaguarete')
    });

    const buttonMapa = this.add.image(600, 590, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {   
      this.scene.get("popUpMapa").ganar()
      this.scene.stop('nivelYaguarete')      
      this.scene.start('menuMapa')             
      if (this.contadorEntrarNivel1>0 && this.contadorEntrarNivel1<2) 
      {
        this.scene.launch('popUpInformativo') 
        this.scene.get('popUpInformativo').mostrarInfoNiveles('bonusYaguareteDesbloqueado')
      } 
      //this.scene.moveUp('menuMapa') //trae adelante a la escena      
    });

    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';
    this.cantidadCiertaEstrellasYaguarete=0 

    if (this.cantidadEstrellasYagua==2) 
    {
      this.add.sprite(675, 450, 'estrellas', 2).setDepth(7)
      this.cantidadCiertaEstrellasYaguarete=2

    }else if (this.cantidadEstrellasYagua==3) 
    {
      this.add.sprite(675, 450, 'estrellas', 3).setDepth(7)
      this.cantidadCiertaEstrellasYaguarete=3
    } else
    {
      this.add.sprite(675, 450, 'estrellas', 1).setDepth(7)
      this.cantidadCiertaEstrellasYaguarete=1
    }    
  }  
  
  public cantidadCiertaEstrellasYagua()
  {
    this.cantidadCiertaEstrellasYaguarete = this.cantidadEstrellasYagua
    console.log('this.cantidadCiertaEstrellasYagua')
  }
  public aumentaContador1()
  {
    this.contadorEntrarNivel1++
    console.log('this.contadorEntrarNivel1')    
  }

}