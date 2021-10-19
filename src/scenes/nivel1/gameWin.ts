import Phaser from 'phaser'
import UI from '../UI'; 
import {sharedInstance as events} from '../eventCenter'

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
    events.on('1estrella', this.cantidadEstrellas1, this)
    events.on('2estrella', this.cantidadEstrellas2, this)
    events.on('3estrella', this.cantidadEstrellas3, this)
  }
 
  cantidadEstrellas1()
  {
    console.log('capturo al vecino')
    this.add.sprite(700, 400, 'estrellasYaguarete', 1).setDepth(7)
  }

  cantidadEstrellas2()
  {
    console.log('capturo ')
    const estrellita = this.add.sprite(700, 400, 'estrellasYaguarete', 2).setDepth(7)
  }
  cantidadEstrellas3()
  {
    console.log('capturo al abajo')
    const estrellita = this.add.sprite(700, 400, 'estrellasYaguarete', 3).setDepth(7)
  }


   



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