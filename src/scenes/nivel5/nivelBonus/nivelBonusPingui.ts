import Phaser from 'phaser'
import preguntas from './preguntasPingui';
export default class bonusPingui extends Phaser.Scene

{ 
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '30pt',
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
    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa'))

    const portada = this.add.image(874, 235, 'pinguinoPic').setScale(0.45);
    const portada2 = this.add.image(496, 235, 'pinguiBonus').setScale(1.25);
    
    let preguntasBonus= new Array<preguntas>()
    preguntasBonus.push(new preguntas('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 'Todas son correctas', 'Caza furtiva', 'Deforestación del hábitat', 'Reducción de sus presas'))
    
    const text_pregunta = this.add.text(275, 360, preguntasBonus[0].pregunta, this.fuenteTexto);

    preguntasBonus[0].respuestasRandom()

    ////////////////////////////////////////////////////////BOTONES//////////////////////////////////////////////////////////////////////////////////
    
    let boton1= this.add.text(150, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton1.setColor(this.scene.launch('pop_up_B_Pin') && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton1.text))) &&
    
    this.scene.pause())

    
    let boton2 = this.add.text(150, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton2.setColor(this.scene.launch('pop_up_B_Pin') && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton2.text))) &&
    
    this.scene.pause())

    let boton3 = this.add.text(800, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton3.setColor(this.scene.launch('pop_up_B_Pin') && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton3.text))) &&
    this.scene.pause())

    let boton4= this.add.text(800, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton4.setColor(this.scene.launch('pop_up_B_Pin') && this.scene.get("pop_up_B_Pin").mostrar_Texto(preguntasBonus[0].revisarResp(boton4.text))) &&
    this.scene.pause())


    /* let cat = localStorage.getItem('nivelPasado');
    if (cat == 1){

    } */
  }
  
}