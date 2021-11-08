
import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class pausePinguino extends Phaser.Scene{
  constructor()
  {
    super('pausePinguino');
  }

  preload(){
    this.load.image('pause', 'assets/Nivel1/popUpPause.png');
  }
  
  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');

    const gamePause = this.add.image(683, 384, 'pause')
    this.add.text(600, 250, getPhrase('Pausa'), {
      fontFamily: 'Titan One',
      fontSize: '50pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    const buttonMapa = this.add.image(490, 440, 'botonMapa')
    .setInteractive()
    .on('pointerover', () => buttonMapa.setScale(1.1))
    .on('pointerout', () => buttonMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop('nivelPinguino')
      this.scene.stop('uiPinguino')
      this.scene.start('menuMapa')
      sonidoButton.play({volume:0.5})
    });

    const buttonRestart = this.add.image(690, 440,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop()
      this.scene.stop('nivelPinguino')
      this.scene.start('nivelPinguino')
      sonidoButton.play({volume:0.5})
    });  

    const buttonVolverJugar = this.add.image(890, 440, 'botonPlay')
    .setInteractive()
    .on('pointerover', () => buttonVolverJugar.setScale(1.1))
    .on('pointerout', () => buttonVolverJugar.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
      this.scene.stop()
      this.scene.resume('nivelPinguino')
      this.scene.resume('uiPinguino')
      sonidoButton.play({volume:0.5})
    })
    
  }

  update(){

  }
}