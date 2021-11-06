import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';
import preguntasMono from './preguntasMono';
export default class bonusMono extends Phaser.Scene{
  
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
    super('nivelBonusMono');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/BonusYaguarete/NivelBonus.png');
    this.load.image('yaguaBonus', 'assets/Mapa/BonusYaguarete/imagenYagua.png');
    this.load.image('yaguaretePic', 'assets/Mapa/BonusYaguarete/yaguarete.png');
  }

  create()
  {  
    const sonidoButton = this.sound.add('sonidoBoton');

    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.start('menuMapa') && sonidoButton.play({volume:0.5}))

    const portada = this.add.image(874, 235, 'yaguaretePic').setScale(0.7);
    const portada2 = this.add.image(496, 235, 'yaguaBonus').setScale(1.35);
    
    let preguntasBonus= new Array<preguntasMono>()
    preguntasBonus.push(new preguntasMono
    (getPhrase('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?'), 
    getPhrase('Todas son correctas'),
    getPhrase('Caza furtiva'),
    getPhrase('Deforestación del hábitat'),
    getPhrase('Reducción de sus presas')))
    
    const text_pregunta = this.add.text(130, 390, preguntasBonus[0].pregunta, this.fuenteTextoPreg);

    preguntasBonus[0].respuestasRandom()

    ////////////////////////////////////////////////////////BOTONES//////////////////////////////////////////////////////////////////////////////////
    
    let boton1= this.add.text(150, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton1.setColor(this.scene.launch('pop_up_BMono') && sonidoButton.play({volume:0.5}) 
    && this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton1.text))) &&
    
    this.scene.pause())

    
    let boton2 = this.add.text(150, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton2.setColor(this.scene.launch('pop_up_BMono') && sonidoButton.play({volume:0.5}) 
    && this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton2.text))) &&
    
    this.scene.pause())

    let boton3 = this.add.text(800, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton3.setColor(this.scene.launch('pop_up_BMono') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton3.text))) &&
    this.scene.pause())

    let boton4= this.add.text(800, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on('pointerdown', () => boton4.setColor(this.scene.launch('pop_up_BMono') && sonidoButton.play({volume:0.5})
    && this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton4.text))) &&
    this.scene.pause())


    /* let cat = localStorage.getItem('nivelPasado');
    if (cat == 1){

    } */
  }
  
}


