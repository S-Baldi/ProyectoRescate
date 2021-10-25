
import Phaser from 'phaser'

export default class pausePinguino extends Phaser.Scene{
  constructor()
  {
    super('pausePinguino');
  }

  preload(){
    this.load.image('pause', 'assets/Nivel1/popUpPause.png');
  }
  
  create(){
    const gamePause = this.add.image(683, 384, 'pause')
    this.add.text(600, 250, 'Pausa', {
      fontSize: '250px',
      color: 'yellow',
      stroke: 'black',
      strokeThickness: 3,
      font: '50pt ARCO Regular',
    })

    const buttonMapa = this.add.image(490, 440, 'botonMapa')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelPinguino')
      this.scene.stop('uiPinguino')
      this.scene.start('menuMapa')
    });

    const buttonRestart = this.add.image(690, 440,  'botonReset')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop()
      this.scene.stop('nivelPinguino')
      this.scene.start('nivelPinguino')
    });  

    const buttonVolverJugar = this.add.image(890, 440, 'botonPlay')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
      this.scene.stop()
      this.scene.resume('nivelPinguino')
    })
    
  }

  update(){

  }
}