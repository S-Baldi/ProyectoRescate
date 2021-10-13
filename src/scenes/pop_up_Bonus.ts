import Phaser from 'phaser'
import preguntas from './preguntas';

export default class pop_up extends Phaser.Scene{
  
  constructor()
  {
    super('pop_up_B');
  }

  preload()
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
  }
  
  create()
  {
    const fondoPopUp = this.add.image(680, 400, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.text(500, 350, 'VOLVER AL MAPA', {fontSize: '45px bold', color: 'black'})
    .setInteractive()  
    .on('pointerdown', () => this.scene.start('menuMapa') && this.scene.stop('nivelBonus'));

    let tipoRespuestaBonus= new Array<preguntas>()
    tipoRespuestaBonus.push(new preguntas('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 'Todas son correctas', 'Caza\nfurtiva', 'Deforestación', 'Reducción de \nsus presas'))

    if (tipoRespuestaBonus[0].revisarResp(respuestaCorrecta)) 
    {
      const respCorrecta = this.add.text(500, 400, 'Respuesta Correcta', {fontSize: '45px bold', color: 'green'})
    } 
    else 
    {
      const respIncorrecta = this.add.text(500, 400, 'Respuesta Incorrecta', {fontSize: '45px bold', color: 'red'})
    }
    
  }

  update()
  {

  }
}

