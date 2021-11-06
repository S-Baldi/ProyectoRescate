import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class gameOver extends Phaser.Scene{
  private fuenteTexto =  {
    fontFamily: 'Titan One',
    fontSize: '50pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }
  constructor()
  {
    super('gameOver');
  }

  preload(){
    this.load.image('lose', 'assets/GameWinLose/lose.png');
  }
  
  create()
  {
    
    const sonidoButton = this.sound.add('sonidoBoton');

    const gameLose = this.add.image(683, 384, 'lose')
    this.add.text(550, 150, getPhrase('Derrota'), this.fuenteTexto)

    const buttonRestart = this.add.image(800, 520,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.start('nivelYaguarete')
      sonidoButton.play({volume:0.5})
    });

    const buttonMapa = this.add.image(600, 520, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelYaguarete')
      this.scene.start('menuMapa')
      sonidoButton.play({volume:0.5})
    });
  }
  

  update(){

  }
}

