import Phaser from 'phaser'
import UI from './UI'; 
import {sharedInstance as events } from '../eventCenter'

export default class gameWin extends Phaser.Scene{
  private cantidadEstrellasYagua: any
  private cantidadCiertaEstrellas: any
  constructor()
  {
    super('gameWin');


  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
    this.load.spritesheet('estrellasYaguarete','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 });
  }
  
  create(){  
    
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
      this.scene.manager.scenes[2].ganarYaguarete()
      this.scene.stop('nivelYaguarete')
      this.scene.start('menuMapa')
    });
    
    //events.on('estrella', this.cantidadEstrellasGanadas, this);
    //events.on('estrella', ()=>{console.log('emite estrellas')}, this);

    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';
    this.cantidadCiertaEstrellas=0

    if (this.cantidadEstrellasYagua==2) 
    {
      this.add.sprite(675, 450, 'estrellasYaguarete', 2).setDepth(7)
      this.cantidadCiertaEstrellas=2

    }else if (this.cantidadEstrellasYagua==3) 
    {
      this.add.sprite(675, 450, 'estrellasYaguarete', 3).setDepth(7)
    } else
    {
      this.add.sprite(675, 450, 'estrellasYaguarete', 1).setDepth(7)
    }
    
  }  

/*   public gameWinLose (finalNivel: string){
    //SI PIERDE YAGUARETE
if (finalNivel === 'yaguareteLose'){
const gameLose = this.add.image(683, 384, 'lose')

const buttonRestart = this.add.image(800, 520,  'botonReset')
.setInteractive()
.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
{ 
this.scene.stop('nivelYaguarete')
this.scene.start('nivelYaguarete')
});

const buttonMapa = this.add.image(600, 520, 'botonMapa')
.setInteractive()
.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
{ 
this.scene.stop('nivelYaguarete')
this.scene.start('menuMapa')
});
};

    //SI GANA YAGUARETE
if(finalNivel === 'yaguareteWin'){
const gameWin = this.add.image(683, 384, 'win')

const buttonRestart = this.add.image(800, 520,  'botonReset')
.setInteractive()
.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
{ 
this.scene.stop('nivelYaguarete')
this.scene.start('nivelYaguarete')
});

const buttonMapa = this.add.image(600, 520, 'botonMapa')
.setInteractive()
.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
{ 
this.scene.manager.scenes[2].ganarYaguarete()
this.scene.stop('nivelYaguarete')
this.scene.start('menuMapa')
});
};
} */

}