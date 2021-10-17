import Phaser from 'phaser'
import preguntas from './preguntas'
export default class bonus extends Phaser.Scene

{ 
  constructor()
  {
    super('nivelBonus');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/NivelBonus.png');
    this.load.image('yaguaBonus', 'assets/Mapa/imagenYagua.png');
    this.load.image('yaguaretePic', 'assets/Mapa/yaguarete.png');
  }

  create()
  {
    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa'))

    const portada = this.add.image(874, 235, 'yaguaretePic').setScale(0.7);
    const portada2 = this.add.image(496, 235, 'yaguaBonus').setScale(1.35);
    
    let preguntasBonus= new Array<preguntas>()
    preguntasBonus.push(new preguntas('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 'Todas son correctas', 'Caza furtiva', 'Deforestación del hábitat', 'Reducción de sus presas'))
    
    const text_pregunta = this.add.text(245, 360, preguntasBonus[0].pregunta, {font: 'bold 30pt Arial', fontSize: '10px', align:'center'});

    preguntasBonus[0].respuestasRandom()

    ////////////////////////////////////////////////////////BOTONES//////////////////////////////////////////////////////////////////////////////////
    
    let boton1= this.add.text(150, 513, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px'})
    .setInteractive()
    .on('pointerdown', () => boton1.setColor(this.scene.launch('pop_up_B') && this.scene.manager.scenes[12].mostrar_Texto(preguntasBonus[0].revisarResp(boton1.text))) &&
    
    this.scene.pause())

    
    let boton2 = this.add.text(150, 655, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px'})
    .setInteractive()
    .on('pointerdown', () => boton2.setColor(this.scene.launch('pop_up_B') && this.scene.manager.scenes[12].mostrar_Texto(preguntasBonus[0].revisarResp(boton2.text))) &&
    
    this.scene.pause())

    let boton3 = this.add.text(800, 513, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px'})
    .setInteractive()
    .on('pointerdown', () => boton3.setColor(this.scene.launch('pop_up_B') && this.scene.manager.scenes[12].mostrar_Texto(preguntasBonus[0].revisarResp(boton3.text))) &&
    this.scene.pause())

    let boton4= this.add.text(800, 655, preguntasBonus[0].devolverPregunta()+"", {font: 'bold 30pt Arial', fontSize: '36px'})
    .setInteractive()
    .on('pointerdown', () => boton4.setColor(this.scene.launch('pop_up_B') && this.scene.manager.scenes[12].mostrar_Texto(preguntasBonus[0].revisarResp(boton4.text))) &&
    this.scene.pause())
  }
}


