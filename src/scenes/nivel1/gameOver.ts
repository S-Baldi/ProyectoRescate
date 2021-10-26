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
    const gameLose = this.add.image(683, 384, 'lose')

    const buttonRestart = this.add.image(800, 520,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.start('nivelYaguarete')
    });

    const buttonMapa = this.add.image(600, 520, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.start('menuMapa')
    });
  }
  

  update(){

  }
}

