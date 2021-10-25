import Phaser from 'phaser'

export default class gameOverPinguino extends Phaser.Scene{
  constructor()
  {
    super('gameOverPinguino');
  }

  preload(){
    this.load.image('losePinguino', 'assets/GameWinLose/losePinguino.png');
  }
  
  create(){
    const gameLose = this.add.image(683, 384, 'losePinguino')

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
      this.scene.stop('nivelPinguino')
      this.scene.start('menuMapa')
    });
  }
  

  update(){

  }
}

