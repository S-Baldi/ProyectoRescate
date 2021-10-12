import arrayShuffle from 'array-shuffle';
import Phaser from 'phaser'
export default class preguntas extends Phaser.Scene {
  private _pregunta: string
  private respuestaCorrecta: string
  private respuestasIncorrectas: Array<string>

  constructor(pregunta: string, respuestaCorrecta: string, respuestaIncorrecta1: string, respuestaIncorrecta2: string, respuestaIncorrecta3: string)
  {
    super('nivelBonus')
    this._pregunta=pregunta
    this.respuestaCorrecta=respuestaCorrecta
    this.respuestasIncorrectas=new Array<string>()

    this.respuestasIncorrectas.push(respuestaIncorrecta1)
    this.respuestasIncorrectas.push(respuestaIncorrecta2)
    this.respuestasIncorrectas.push(respuestaIncorrecta3)
    this.respuestasIncorrectas.push(respuestaCorrecta)
     
  }

  preload() 
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
  }

  
  public respuestasRandom()
  {
    this.respuestasIncorrectas = arrayShuffle(this.respuestasIncorrectas)
  }

  public devolverPregunta(): string|undefined 
  {
    return this.respuestasIncorrectas.pop()
  }

  public revisarResp(respuestaJuego: string): string
  {
    if (respuestaJuego == this.respuestaCorrecta) 
    {
      /* const pop_up_bonus = this.add.image(680, 350, 'botonNivel').setScale(0.7)
      .setInteractive()
      .on('pointerdown', () => 
  
      this.add.text(680, 400, 'VOLVER AL MAPA', {fontSize: '45px bold', color: 'black'})
      .setInteractive().on('pointerdown', () => this.scene.start('menuMapa'))) */
      return 'green'      
    }
    /* const pop_up_bonus = this.add.image(680, 350, 'botonNivel').setScale(0.7)
    .setInteractive()
    .on('pointerdown', () => 
  
    this.add.text(680, 400, 'VOLVER AL MAPA', {fontSize: '45px bold', color: 'black'})
    .setInteractive().on('pointerdown', () => this.scene.start('menuMapa'))) */
    return 'red'    
  }


  public set pregunta(v : string) {
    this._pregunta = v;
  }
  
  
  public get pregunta() : string {
    return this._pregunta
  }

}