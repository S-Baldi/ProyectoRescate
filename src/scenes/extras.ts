import Phaser from 'phaser'
export default class extras extends Phaser.Scene
{
  constructor()
  {
    super('extras');
  }

  preload(){    
  }

  create()
  {
    const fondoMenu = this.add.image(683, 384, 'menuExtras').setScale(0.75);

    const buttonAtras = this.add.image(1285, 80, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'));
    
    const buttonDesbloqueableYaguarete = this.add.image(300, 250, 'botonYaguarete').setScale(0.75);
    const buttonDesbloqueableMono = this.add.image(300, 450, 'botonMono').setScale(0.75);
    const buttonDesbloqueableCondor = this.add.image(300, 650, 'botonCondor').setScale(0.75);
    const buttonDesbloqueableBallena= this.add.image(1000, 350, 'botonBallena').setScale(0.75);
    const buttonDesbloqueablePinguino = this.add.image(1000, 550, 'botonPinguino').setScale(0.75);

    
  }
}