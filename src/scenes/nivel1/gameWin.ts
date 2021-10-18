import Phaser from 'phaser'
import UI from '../UI'; 

export default class gameWin extends Phaser.Scene{
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

    const estrellitas= this.add.sprite(700, 400, 'estrellasYaguarete')

  }

  public mostrarEstrella(criasTotales:number, comidaTotales: number)
  {
    switch (this.mostrarEstrella) 
    {
      case criasTotales = 3:
        this.add.sprite(700, 400, 'yaguarete', 2)
        
        break;
      case comidaTotales=20:
        this.add.sprite(700, 400, 'yaguarete', 2)
        break;
      case comidaTotales=3 && comidaTotales=20:
        this.add.sprite(700, 400, 'yaguarete', 4)
        break;
    
      default:
        this.add.sprite(700, 400, 'yaguarete', 1)
        break;
    }
    
    /* if (criasTotales = 3) 
    {
      this.add.sprite(700, 400, 'yaguarete', 2)
    }else
    {
      if (comidaTotales = 20) 
      {
        this.add.sprite(700, 400, 'yaguarete', 2) 
      }
    }

    if (comidaTotales = 20) 
    {
      this.add.sprite(700, 400, 'yaguarete', 3) 
    } */
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
  

  update(){

  }
}