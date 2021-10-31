import Phaser from 'phaser'
import UI from '../nivel1/UI'; 
import {sharedInstance as events} from '../eventCenter'

export default class gameWinPinguino extends Phaser.Scene{
  private cantidadEstrellasPingui: any
  private cantidadCiertaEstrellasPinguino: any
  constructor()
  {
    super('gameWinPinguino');
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
      this.scene.stop('nivelPinguino')
      this.scene.start('nivelPinguino')
    });

    const buttonMapa = this.add.image(600, 590, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.get("menuMapa").ganar()
      this.scene.stop('nivelPinguino')
      this.scene.start('menuMapa')
    });

    this.cantidadEstrellasPingui = localStorage.getItem('estrellasPingui') || '1';
    this.cantidadCiertaEstrellasPinguino=0 

    if (this.cantidadEstrellasPingui==2) 
    {
      this.add.sprite(675, 450, 'estrellas', 2).setDepth(7)
      this.cantidadCiertaEstrellasPinguino=2

    }else if (this.cantidadEstrellasPingui==3) 
    {
      this.add.sprite(675, 450, 'estrellas', 3).setDepth(7)
      this.cantidadCiertaEstrellasPinguino=3
    } else
    {
      this.add.sprite(675, 450, 'estrellas', 1).setDepth(7)
      this.cantidadCiertaEstrellasPinguino=1
    }
  }

  public cantidadCiertaEstrellasPingui()
  {
    this.cantidadCiertaEstrellasPinguino = this.cantidadEstrellasPingui
    console.log('this.cantidadCiertaEstrellasPinguino')
  };
  

}