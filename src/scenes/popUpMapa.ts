import Phaser from 'phaser'

export default class popUpMapa extends Phaser.Scene
{  
  constructor()
  {
    super('popUpMapa');
  }

  preload()
  {
    this.load.image('popUpMapa', 'assets/MenuPrincipal/popUp.png')
  }
  
  create()
  {
    this.add.image(680, 350, 'popupMapa').setScale(0.7);
    const buttonAtras = this.add.image(900, 250, 'botonatras')
    .setInteractive()
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('menuMapa'));    
  }  

  public mostrarNiveles(info:string)
  {
    if (info=='yaguareteNiveles') 
    {
      this.add.image(680, 350, 'botonNivel').setScale(0.7) &&

      this.add.text(680, 400, '   NIVEL \nPRINCIPAL', {fontSize: '45px bold', color: 'black'})
      .setInteractive().on('pointerdown', () => this.scene.sleep('menuMapa') /* duermo el mapa para guardar datos */ 
      &&  this.scene.start('nivelYaguarete'))  &&

      this.add.sprite(670, 280, 'estrellasYaguarete').setScale(1.8) && 
      this.add.text(450, 400, ' NIVEL \nBONUS', {fontSize:'45px bold', color: 'gray'})   
      
    
    }     
    
    
  }

  update()
  {

  }
}

