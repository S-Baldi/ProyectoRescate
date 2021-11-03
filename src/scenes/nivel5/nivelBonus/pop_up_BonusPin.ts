import Phaser from 'phaser'
export default class pop_up_Pingui extends Phaser.Scene{
  
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '35pt',
  color: '#000000',
  align: 'justify'
  };

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
    const sonidoButton = this.sound.add('sonidoBoton');

    const fondoPopUpBonus = this.add.image(680, 250, 'botonNivel').setScale(0.7);

    const volverMapa = this.add.image(680, 350, 'botonMapa')
    .setInteractive()  
    .on('pointerdown', () => this.scene.start('menuMapa') && sonidoButton.play({volume:0.5}) 
    && this.scene.stop('nivelBonusPin'));
    //console.log(this.scene.start('menuMapa'))    
  }
  
  public mostrar_Texto(rta:string)
  {
    console.log(this)
    if (rta=='green')
    {
      this.add.text(480, 90, 'Respuesta Correcta', this.fuenteTexto).setDepth(3)
      this.add.sprite(680, 205, 'estrellaBonus', 1).setDepth(3).setScale(0.6)
      localStorage.setItem('estrellasPinguinoBonus', '1')
    }
    else
    {
      this.add.text(460, 90, 'Respuesta Incorrecta', this.fuenteTexto).setDepth(3) //esto trae hacia delante o atras las cosas
      this.add.sprite(680, 205, 'estrellaBonus', 0).setDepth(3).setScale(0.6)
    }
    this.scene.get('popUpMapa').yaEntroBonusPinguino()
    return rta
  }

  update()
  {

  }
}

