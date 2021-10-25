import Phaser from 'phaser'
import UI from '../nivel1/UI'; 
import {sharedInstance as events} from '../eventCenter'

export default class gameWinPinguino extends Phaser.Scene{
  constructor()
  {
    super('gameWinPinguino');
  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
    /* this.load.spritesheet('estrellasYaguarete','assets/Mapa/estrellasMapa.png',
    {frameWidth:269 , frameHeight:114 }) */;
  }
  
  create(){
    
    
    this.add.image(683, 384, 'win')

    const buttonRestart = this.add.image(800, 520,  'botonReset')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelPinguino')
      this.scene.start('nivelPinguino')
    });

    const buttonMapa = this.add.image(600, 520, 'botonMapa')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      //this.scene.manager.scenes[2].ganarYaguarete()
      this.scene.stop('nivelPinguino')
      this.scene.start('menuMapa')
    });
    //events.on('estrella', this.cantidadEstrellas, this)
  }

  /* cantidadEstrellas(cantidad:number)
  {
    const estrellita = this.add.sprite(700, 400, 'estrellasYaguarete', cantidad).setDepth(7)
  } */

  /* public mostrarEstrella(criasTotales:number, comidaTotales:number)
  {
    if (criasTotales=1) 
    {
      this.add.sprite(700, 400, 'estrellasYaguarete', 2)
    } else 
    {  
      this.add.sprite(700, 400, 'estrellasYaguarete', 1)
    }
    if (comidaTotales=1) 
    {
      this.add.sprite(700, 400, 'estrellasYaguarete', 2)
    } else 
    {
      this.add.sprite(700, 400, 'estrellasYaguarete', 1)
    }
    if (criasTotales=1, comidaTotales=1) 
    {
      this.add.sprite(700, 400, 'estrellasYaguarete', 3)
    } else 
    {
      this.add.sprite(700, 400, 'estrellasYaguarete', 1)
    }
     switch ('estrellasYaguarete') 
    {
      case 'crias':
        
        this.add.sprite(700, 400, 'estrellasYaguarete', 2).setDepth(5)
        
        break;
      case 'comida':
        this.add.sprite(700, 400, 'estrellasYaguarete', 2).setDepth(5)
        break;
      case 'comida' && 'crias':
        this.add.sprite(700, 400, 'estrellasYaguarete', 3).setDepth(5)
        break;
    
      default:
        this.add.sprite(700, 400, 'estrellasYaguarete', 1).setDepth(5)
        break;
    } 
  } */

  /* switch ('estrellasYaguarete') 
    {
      case criasTotales=1:
        
        this.add.sprite(700, 400, 'estrellasYaguarete', 2).setDepth(5)
        
        break;
      case comidaTotales=1:
        this.add.sprite(700, 400, 'estrellasYaguarete', 2).setDepth(5)
        break;
      case comidaTotales=1 && comidaTotales=1:
        this.add.sprite(700, 400, 'estrellasYaguarete', 4).setDepth(5)
        break;
    
      default:
        this.add.sprite(700, 400, 'estrellasYaguarete', 1).setDepth(5)
        break;
    } */

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