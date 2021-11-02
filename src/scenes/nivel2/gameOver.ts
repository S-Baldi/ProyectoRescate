import Phaser from 'phaser'

export default class gameOverMono extends Phaser.Scene{
  constructor()
  {
    super('gameOverMono');
  }

  preload(){
    this.load.image('loseMono', 'assets/GameWinLose/losePinguino.png');
  }
  
  create(){
    const gameLose = this.add.image(683, 384, 'loseMono')

    const buttonRestart = this.add.image(800, 520,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelMono')
      this.scene.start('nivelMono')
    });

    const buttonMapa = this.add.image(600, 520, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelMono')
      this.scene.start('menuMapa')
    });
  }
}

