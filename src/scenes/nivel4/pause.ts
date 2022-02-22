
import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class pauseBallena extends Phaser.Scene
{
  //private estadoMusica:any;
  //private sonidoButton:any;
  /* public sfxDetenido()
  {
    this.sonidoButton.stop()
  }
  public sfxPlay()
  {
    this.sonidoButton.play({volume:0.5})
  } */
  constructor()
  {
    super('pauseBallena');
  }

  preload(){
    this.load.image('pause', 'assets/Nivel1/popUpPause.png');
  }
  
  create()
  {
    //this.estadoMusica = localStorage.getItem('musicaPlay')|| '0';
    //this.sonidoButton = this.sound.add('sonidoBoton');
    this.scene.get('nivelBallena')//.musicaPause()
    
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
      this.scene.stop('nivelBallena_2')
      this.scene.stop('uiBallena')
      this.scene.start('menuMapa')
      /* if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      } */
    });

    const buttonRestart = this.add.image(690, 440,  'botonReset')
    .setInteractive()
    .on('pointerover', () => buttonRestart.setScale(1.1))
    .on('pointerout', () => buttonRestart.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.stop()
      this.scene.stop('nivelBallena_2')
      this.scene.start('nivelBallena_2')
      /* if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      } */
    });  

    const buttonVolverJugar = this.add.image(890, 440, 'botonPlay')
    .setInteractive()
    .on('pointerover', () => buttonVolverJugar.setScale(1.1))
    .on('pointerout', () => buttonVolverJugar.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.scene.stop()
      this.scene.resume('nivelBallena_2')
      this.scene.resume('uiBallena')
      /* if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      } */
      //this.scene.get('nivelBallena_2')//.musicaResume()
    })
    
  }

  update(){

  }
}