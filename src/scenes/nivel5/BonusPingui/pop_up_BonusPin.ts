import Phaser from 'phaser'
export default class pop_up_Pingui extends Phaser.Scene{
  
  constructor()
  {
    super('pop_up_B_Pin');
  }

  preload()
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('botonMapa', 'assets/MenuPrincipal/Botones/botonMenu.png');
  }
  
  create()
  {
    const fondoPopUpBonus = this.add.image(680, 250, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.image(680, 350, 'botonMapa')
    .setInteractive()  
    .on('pointerdown', () => this.scene.start('menuMapa') && this.scene.stop('nivelBonusPin'));
    //console.log(this.scene.start('menuMapa'))    
  }
  
  public mostrar_Texto(rta:string)
  {
    console.log(this)
    if (rta=='green')
    {
      this.add.text(520, 180, 'Respuesta Correcta', {fontSize: '45px bold', color: 'green'}).setDepth(3)
    }
    else
    {
      this.add.text(520, 180, 'Respuesta Incorrecta', {fontSize: '45px bold', color: 'red'}).setDepth(3) //esto trae hacia delante o atras las cosas
    }
    return rta
  }

  update()
  {

  }
}

