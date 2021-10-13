import Phaser from 'phaser'
import bonus from './nivelBonus';
import preguntas from './preguntas';

export default class pop_up extends Phaser.Scene{
  
  constructor()
  {
    super('pop_up_B');
  }

  preload()
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('botonMapa', 'assets/MenuPrincipal/Botones/botonMenu.png');
  }
  
  create()
  {
    const fondoPopUp = this.add.image(680, 250, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.image(680, 350, 'botonMapa')
    .setInteractive()  
    .on('pointerdown', () => this.scene.start('menuMapa') && this.scene.stop('nivelBonus'));

    let tipoRespuestaBonus= new Array<preguntas>()
    tipoRespuestaBonus.push(new preguntas('¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?', 'Todas son correctas', 'Caza\nfurtiva', 'Deforestación', 'Reducción de \nsus presas'))


    if (tipoRespuestaBonus[0].revisarResp(this.scene[12])) 
    {
      
      //this.scene[12].add.text(520, 450, 'Respuesta Correcta', {fontSize: '45px bold', color: 'green'})
    } 
    else 
    {
      //this.scene[12].add.text(520, 450, 'Respuesta Incorrecta', {fontSize: '45px bold', color: 'red'})
    }
    
  }

  update()
  {

  }
}

