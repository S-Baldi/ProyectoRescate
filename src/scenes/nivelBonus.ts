import Phaser from 'phaser'
import preguntas from './preguntas'
export default class bonus extends Phaser.Scene

{
  private respuesta1?: string
  private respuesta2?: string
  private respuesta3?: string
  private respuesta4?: string

  constructor()
  {
    super('nivelBonus');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/NivelBonus.png');
    this.load.image('yaguaBonus', 'assets/Mapa/imagenYagua.png');
  }

  create()
  {
    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa'))

    const portada = this.add.image(683, 235, 'yaguaBonus').setScale(1.28);
    
    let preguntasBonus= new Array<preguntas>()
    preguntasBonus.push(new preguntas('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 'Todas son correctas', 'Caza\nfurtiva', 'Deforestación', 'Reducción de \nsus presas'))

    const pregunta = 
    [
      '¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 
      '¿Cuantas crias tienen al año?'
    ];
    
    this.respuesta1 = 'Caza furtiva'
    this.respuesta2 = 'Deforestación'
    this.respuesta3 = 'Reducción de \n sus presas'
    this.respuesta4 = 'Todas son correctas'

    let indice_aleatorio = Math.floor(Math.random()*pregunta.length);
    
    const text_pregunta = this.add.text(245, 360, preguntasBonus[0].pregunta, {font: 'bold 30pt Arial', fontSize: '10px', align:'center',});

    if(indice_aleatorio==1)
    {
      this.respuesta1 = '1'
      this.respuesta2 = '2'
      this.respuesta3 = '3'
      this.respuesta4 = 'Todas son correctas'
    }; 

    preguntasBonus[0].respuestasRandom()
    
    let boton1= this.add.text(280, 515, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
    .setInteractive()
    .on('pointerdown', () => boton1.setColor(preguntasBonus[0].revisarResp(boton1.text)));
    
    let boton2 = this.add.text(280, 660, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
    .setInteractive()
    .on('pointerdown', () => boton2.setColor(preguntasBonus[0].revisarResp(boton2.text)));

    let boton3 = this.add.text(805, 515, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
    .setInteractive()
    .on('pointerdown', () => boton3.setColor(preguntasBonus[0].revisarResp(boton3.text)));

    let boton4= this.add.text(850, 660, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
    .setInteractive()
    .on('pointerdown', () => boton4.setColor(preguntasBonus[0].revisarResp(boton4.text))); 

  }

}


