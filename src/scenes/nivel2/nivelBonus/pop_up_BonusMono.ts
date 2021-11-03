import Phaser from 'phaser'
export default class pop_up_BonusMono extends Phaser.Scene{
  
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '35pt',
  color: '#000000',
  align: 'justify'
  };
  private contadorEntrarNivel2:number=0

  constructor()
  {
    super('pop_up_BMono');
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
    .on('pointerover', () => volverMapa.setScale(1.1))
    .on('pointerout', () => volverMapa.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>     
    {
      this.scene.start('menuMapa')
      this.scene.stop('nivelBonusMono')
      sonidoButton.play({volume:0.5})
      if (this.contadorEntrarNivel2>0 && this.contadorEntrarNivel2<2) 
      {
        this.scene.launch('popUpInformativo')
        this.scene.get('popUpInformativo').mostrarInfoNiveles('nivelPinguiDesbloqueado')
      }
    
    })     
  }
  
  public mostrar_Texto(rta:string)
  {    
    if (rta=='green')
    {
      this.add.text(480, 90, 'Respuesta Correcta', this.fuenteTexto).setDepth(3)
      this.add.sprite(680, 205, 'estrellaBonus', 1).setDepth(3).setScale(0.6)
      localStorage.setItem('estrellasMonoBonus', '1')
    }
    else
    {
      this.add.text(460, 90, 'Respuesta Incorrecta', this.fuenteTexto).setDepth(3) //esto trae hacia delante o atras las cosas
      this.add.sprite(680, 205, 'estrellaBonus', 0).setDepth(3).setScale(0.6)
    }
    this.scene.get('popUpMapa').yaEntroBonusMono()
    
    return rta

  }
  public aumentaContador2()
  {
    this.contadorEntrarNivel2++
    console.log('this.contadorEntrarNivel1')    
  }

}

