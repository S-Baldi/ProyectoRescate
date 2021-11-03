import Phaser from 'phaser'
import {sharedInstance as events} from '../eventCenter'
export default class extras extends Phaser.Scene
{
  private estrellaMasAltaPingui
  private estrellaMasAltaYagua
  private cantidadEstrellasYaguaBonus
  private cantidadEstrellasPinguiBonus
  private estrellaMasAltaMono
  private cantidadEstrellasMonoBonus

  private texto1 =
  {  
    fontFamily: 'Titan One',
    fontSize: '70pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  }

  private texto2 =     
  {fontFamily: 'Viga',
  fontSize: '50pt',
  color: '#9b9b9b',
  stroke: '#000000',
  strokeThickness: 4,
  align: 'justify',
  };

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
    this.load.image('candado', 'assets/MenuPrincipal/Botones/Extras/candado.png')
    this.load.spritesheet('estrellaBonus', 'assets/Mapa/estrellasBonus.png',
    {frameWidth:205, frameHeight:190});
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

    this.estrellaMasAltaYagua = localStorage.getItem('estrellasYaguarete') || '1';
    this.cantidadEstrellasYaguaBonus= localStorage.getItem('estrellasYaguareteBonus') || '1';
    this.estrellaMasAltaPingui = localStorage.getItem('estrellasPingui') || '1';
    this.cantidadEstrellasPinguiBonus = localStorage.getItem('estrellasPinguinoBonus') || '1';
    this.estrellaMasAltaMono = localStorage.getItem('estrellasMono') || '1';
    this.cantidadEstrellasMonoBonus = localStorage.getItem('estrellasMonoBonus') || '1';

    const estrellasTotales = +this.estrellaMasAltaPingui + +this.estrellaMasAltaYagua + 
    +this.cantidadEstrellasYaguaBonus + +this.cantidadEstrellasPinguiBonus + +this.estrellaMasAltaMono + +this.cantidadEstrellasMonoBonus
    
    //Yaguarete
    if(estrellasTotales<3)
    {
      const txtYagua = this.add.text(40, 187, '3', this.texto1)
      const buttonDesbloqueableYaguarete = this.add.sprite(140, 232, 'estrellaBonus', 1).setDepth(3).setScale(0.40)
      const txtDesbloqueable= this.add.text(180, 200, 'DESBLOQUEABLE', this.texto2)
      const candado= this.add.image(780, 230, 'candado').setScale(0.8)
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
      const txtYagua = this.add.text(40, 400, '3', this.texto1)
      const buttonDesbloqueableYaguarete = this.add.sprite(140, 400+45, 'estrellaBonus', 1).setDepth(3).setScale(0.40)
      const txtDesbloqueable= this.add.text(180, 400+13, 'DESBLOQUEABLE', this.texto2)
      const candado= this.add.image(780, 400+43, 'candado').setScale(0.8)
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
    if(estrellasTotales<15)
    {
      const txtYagua = this.add.text(40, 613, '3', this.texto1)
      const buttonDesbloqueableYaguarete = this.add.sprite(140, 613+45, 'estrellaBonus', 1).setDepth(3).setScale(0.40)
      const txtDesbloqueable= this.add.text(180, 613+13, 'DESBLOQUEABLE', this.texto2)
      const candado= this.add.image(780, 613+43, 'candado').setScale(0.8)
    }
    else{
      let buttonInfoCondor = this.add.image(300, 550, 'infoCondor').setScale(0.8) &&
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
    if(estrellasTotales<13)
    {
      const txtYagua = this.add.text(550, 293.5, '3', this.texto1)
      const buttonDesbloqueableYaguarete = this.add.sprite(550+100, 293.5+45, 'estrellaBonus', 1).setDepth(3).setScale(0.40)
      const txtDesbloqueable= this.add.text(550+140, 293.5+13, 'DESBLOQUEABLE', this.texto2)
      const candado= this.add.image(550+740, 293.5+43, 'candado').setScale(0.8)
    }
    else
    {
      let buttonInfoBallena = this.add.image(1000, 350, 'infoBallena').setScale(1) &&
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
    if(estrellasTotales<9)
    {
      const txtYagua = this.add.text(550, 506.5, '3', this.texto1)
      const buttonDesbloqueableYaguarete = this.add.sprite(550+100, 506.5+45, 'estrellaBonus', 1).setDepth(3).setScale(0.40)
      const txtDesbloqueable= this.add.text(550+140, 506.5+13, 'DESBLOQUEABLE', this.texto2)
      const candado= this.add.image(550+740, 506.5+43, 'candado').setScale(0.8)
    }
    else
    {
      let buttonInfoPinguino = this.add.image(1000, 550, 'infoPinguino').setScale(0.9) &&
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