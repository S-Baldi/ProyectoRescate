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
    
  }

  update()
  {

  }
}
