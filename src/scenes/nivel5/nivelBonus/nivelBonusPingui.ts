import Phaser from 'phaser'
import preguntas from './preguntasPingui';
import { getPhrase } from '~/services/translation';
export default class bonusPingui extends Phaser.Scene

{ 
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '30pt',
  color: '#000000',
  align: 'center'
  };

  private fuenteTextoPreg =     
  {fontFamily: 'Viga',
  fontSize: '25pt',
  color: '#000000',
  align: 'center'
  };

  constructor()
  {
    super('nivelBonusPin');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/BonusPinguino/NivelBonus.png');
    this.load.image('pinguiBonus', 'assets/Mapa/BonusPinguino/PinguiConCria.png');
    this.load.image('pinguinoPic', 'assets/Mapa/BonusPinguino/Pinguino1.png');
  }

  create()
  {  
    const sonidoButton = this.sound.add('sonidoBoton');

    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa') && sonidoButton.play({volume:0.5}))

    const portada = this.add.image(874, 235, 'pinguinoPic').setScale(0.45);
    const portada2 = this.add.image(496, 235, 'pinguiBonus').setScale(1.25);
    
    let preguntasBonus= new Array<preguntas>()
    preguntasBonus.push(new preguntas
    (getPhrase('¿En dónde habita el pingüino de Magallanes en Argentina?'), 
    getPhrase('Sur Argentino'),
    getPhrase('Noroeste Argentino'),
    getPhrase('Oeste Argentino'),
    getPhrase('Noreste Argentino')))
    
    const text_pregunta = this.add.text(130, 390, preguntasBonus[0].pregunta, this.fuenteTextoPreg);

    preguntasBonus[0].respuestasRandom()

    ////////////////////////////////////////////////////////BOTONES//////////////////////////////////////////////////////////////////////////////////
    
    let boton1= this.add.text(150, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton1.setColor(this.scene.launch('pop_up_B_Pin') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton1.text))) &&
    
    this.scene.pause())

    
    let boton2 = this.add.text(150, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton2.setColor(this.scene.launch('pop_up_B_Pin') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton2.text))) &&
    
    this.scene.pause())

    let boton3 = this.add.text(800, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton3.setColor(this.scene.launch('pop_up_B_Pin') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton3.text))) &&
    this.scene.pause())

    let boton4= this.add.text(800, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton4.setColor(this.scene.launch('pop_up_B_Pin') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton4.text))) &&
    this.scene.pause())  
  }  
}