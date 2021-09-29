import Phaser from 'phaser'

export default class gameWin extends Phaser.Scene{
  constructor()
  {
    super('gameWin');
  }

  preload(){
    this.load.image('win', 'assets/GameWinLose/win.png');
  }
  
  create(){
    const gameLose = this.add.image(683, 384, 'win')

    const buttonRestart = this.add.image(800, 520,  'botonInfo')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuMapa')
    });

    const buttonMapa = this.add.image(600, 520, 'botonMenuPpal')
    .setInteractive()
  }

  update(){

  }
}