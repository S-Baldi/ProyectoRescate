import Phaser from 'phaser'

export default class gameOver extends Phaser.Scene{
  constructor()
  {
    super('gameOver');
  }

  preload(){
    this.load.image('lose', 'assets/GameWinLose/lose.png');
  }
  
  create(){
    console.log('gameover')
    const gameLose = this.add.image(683, 384, 'lose')

    const buttonRestart = this.add.image(300, 300,  'botonatras')
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuPpal') && sonidoButton.play({volume:0.5})
    });

    const buttonMapa = this.add.image(300, 300, 'botonMenuPpal')
    .setInteractive()
  }

  update(){

  }
}

