import Phaser from 'phaser'
import {sharedInstance as events} from '../eventCenter'
export default class extras extends Phaser.Scene
{
  private cantidadEstrellasYagua
  private cantidadEstrellasYaguaBonus
  private cantidadEstrellasPingui
  private cantidadEstrellasPinguiBonus

  constructor()
  {
    super('extras');
  }
  
  preload()
  {
    this.load.image('fotoYaguarete', 'assets/MenuPrincipal/Extras/YaguareteExtras.png');
    this.load.image('fotoMono', 'assets/MenuPrincipal/Extras/MonoExtras.png');
    this.load.image('fotoBallena', 'assets/MenuPrincipal/Extras/BallenaExtras.png');
    this.load.image('fotoPinguino', 'assets/MenuPrincipal/Extras/PinguinoExtras.png');
    this.load.image('fotoCondor', 'assets/MenuPrincipal/Extras/CondorExtras.png');
  }

  create()
  {
    const sonidoButton = this.sound.add('sonidoBoton');
    const fondoMenu = this.add.image(683, 384, 'fondoLimpio').setScale(0.72);
    this.add.text(550, 50, 'EXTRAS', {  
      fontFamily: 'Titan One',
      fontSize: '60pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,
    })

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('menuPpal') && sonidoButton.play({volume:0.5}));

    this.cantidadEstrellasYagua = localStorage.getItem('estrellasYaguarete') || '1';
    this.cantidadEstrellasYaguaBonus= localStorage.getItem('estrellasYaguareteBonus') || '1';
    this.cantidadEstrellasPingui = localStorage.getItem('estrellasPingui') || '1';
    this.cantidadEstrellasPinguiBonus = localStorage.getItem('estrellasPinguinoBonus') || '1';

    const estrellasTotales = +this.cantidadEstrellasYagua + +this.cantidadEstrellasYaguaBonus + 
    +this.cantidadEstrellasPingui + +this.cantidadEstrellasPinguiBonus
    
    //Yaguarete
    if(estrellasTotales<3)
    {
      const buttonDesbloqueableYaguarete = this.add.image(300, 250, 'botonYaguarete').setScale(0.75);
    }
    else
    {
      let buttonInfoYaguarete = this.add.image(200, 250, 'infoYaguarete').setScale(0.9) &&
      this.add.text(300, 220, 'YAGUARETÉ', 
      { fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && sonidoButton.play({volume:0.5}) && this.scene.pause() && this.scene.get('pop_up_E').mostrarInfo('yaguareteInformation'));
      
    }

    //Mono
    if(estrellasTotales<6)
    {
      const buttonDesbloqueableMono = this.add.image(300, 450, 'botonMono').setScale(0.75);
    }
    else
    {
      let buttonInfoMono = this.add.image(200, 450, 'infoMono').setScale(1.1) &&
      this.add.text(300, 420, 'MONO', 
      {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && sonidoButton.play({volume:0.5}) && this.scene.pause() && this.scene.get('pop_up_E').mostrarInfo('monoInformation'));  
    }

    //Condor
    if(estrellasTotales<9)
    {
      const buttonDesbloqueableCondor = this.add.image(300, 650, 'botonCondor').setScale(0.75);
    }
    else{
      let buttonInfoCondor = this.add.image(950, 550, 'infoCondor').setScale(0.8) &&
      this.add.text(1050, 520, 'CONDOR', 
      {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && sonidoButton.play({volume:0.5}) && this.scene.pause() && this.scene.get('pop_up_E').mostrarInfo('condorInformation')) ;   
    }

    //Ballena
    if(estrellasTotales<12)
    {
      const buttonDesbloqueableBallena= this.add.image(1000, 350, 'botonBallena').setScale(0.75);
    }
    else
    {
      let buttonInfoBallena = this.add.image(950, 350, 'infoBallena').setScale(1) &&
      this.add.text(1050, 320, 'BALLENA', 
      {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && sonidoButton.play({volume:0.5}) && this.scene.pause() && this.scene.get('pop_up_E').mostrarInfo('ballenaInformation')) ;  
    }

    //Pingüino
    if(estrellasTotales<15)
    {
      const buttonDesbloqueablePinguino = this.add.image(1000, 550, 'botonPinguino').setScale(0.75);
    }
    else
    {
      let buttonInfoPinguino = this.add.image(200, 650, 'infoPinguino').setScale(0.9) &&
      this.add.text(300, 620, 'PINGÜINO', 
      {fontFamily: 'Titan One',
      fontSize: '40pt',
      color: '#FFBD0D',
      stroke: '#00572f',
      strokeThickness: 6,})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && sonidoButton.play({volume:0.5}) && this.scene.pause() && this.scene.get('pop_up_E').mostrarInfo('pinguinoInformation')) ;  
    }      
  }  
}