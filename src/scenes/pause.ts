
import Phaser from 'phaser'

export default class pause extends Phaser.Scene{
  constructor()
  {
    super('pause');
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

    const buttonRestart = this.add.image(790, 440,  'botonReset')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop()
      this.scene.resume('nivelYaguarete')
    });

    const buttonMapa = this.add.image(590, 440, 'botonMapa')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.stop('ui')
      this.scene.start('menuMapa')
    });
  }

  update(){

  }
}