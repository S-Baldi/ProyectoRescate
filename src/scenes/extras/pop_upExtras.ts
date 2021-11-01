import Phaser from 'phaser'

export default class pop_upExt extends Phaser.Scene
{
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '20pt',
  color: '#000000',
  align: 'justify',
  lineSpacing: -5
  };

  private fuenteNombres = 
  { fontFamily: 'Titan One',
    fontSize: '50pt',
    color: '#FFBD0D',
    stroke: '#00572f',
    strokeThickness: 6,
  };

  
  constructor()
  {
    super('pop_up_E');
  }

  preload()
  {
    this.load.image('popUpExtras', 'assets/MenuPrincipal/popUp2.png')

  }
  
  create()
  {
    const fondoPopUpExtras = this.add.image(680, 390, 'popUpExtras').setScale(0.85)
    const buttonAtras = this.add.image(1080, 150, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('extras'));    
  }  

  public mostrarInfo(info:string)
  {
    if (info=='yaguareteInformation') 
    {
      const tituloPopUpY= this.add.text(500, 80, 'YAGUARETÉ', this.fuenteNombres).setDepth(3);

      const fotoY = this.add.image(350, 400, 'fotoYaguarete').setScale(0.85).setDepth(3);

      //DIFERENCIA DE 24 o 34 ENTRE TEXTO Y TEXTO, el doble para dos renglones
      //Espaciado de -5 (lineSpacing: -5)
      this.add.text(540, 170, 'Nombre científico: Panthera onca', this.fuenteTexto).setDepth(3)
      this.add.text(540, 204, 'Longitud: 1,1 a 2,50m', this.fuenteTexto ).setDepth(3)
      this.add.text(540, 238, 'Altura: 63 a 76 cm', this.fuenteTexto).setDepth(3)
      this.add.text(540, 262, 'Peso: 56 a 96 kg', this.fuenteTexto).setDepth(3)
      this.add.text(540, 296, 'Distribución: Noreste de Argentina', this.fuenteTexto).setDepth(3)
      this.add.text(540, 330, 'Estado de Conservación: Casi Amenazado', this.fuenteTexto).setDepth(3)
      this.add.text(540, 364, 'Dieta:  pecaríes, carpinchos, yacarés, venados, tapires', this.fuenteTexto).setDepth(3)
      this.add.text(540, 398, 'Según la Red Yaguareté quedan menos de 250 \nYaguaretés adultos en todo el país', this.fuenteTexto).setDepth(3)
      this.add.text(540, 456, 'El yaguareté es el felino más grande del continente \namericano', this.fuenteTexto).setDepth(3)
      this.add.text(540, 514, 'Su territorio abarca 40.000 hectáreas en la región \nchaqueña', this.fuenteTexto).setDepth(3)
      this.add.text(540, 572, 'Es una de las especies que se encuentran más \namenazadas por la caza furtiva.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 630, 'Es una especie de la fauna argentina declarada como \nMonumento Natural Nacional', this.fuenteTexto).setDepth(3)
    }     
    
    if (info=='monoInformation')
    {
      const tituloPopUpM= this.add.text(525, 130, 'MONO', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoM = this.add.image(350, 435, 'fotoMono').setScale(0.65).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Mono', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }
    
    if (info=='condorInformation')
    {
      const tituloPopUpC= this.add.text(525, 130, 'CONDOR', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoC = this.add.image(350, 435, 'fotoCondor').setScale(0.24).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Condor', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }
    
    if (info=='ballenaInformation')
    {
      const tituloPopUpB= this.add.text(525, 130, 'BALLENA', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoB = this.add.image(350, 435, 'fotoBallena').setScale(0.39).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Ballena', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }
    
    if (info=='pinguinoInformation')
    {
      const tituloPopUpP= this.add.text(525, 130, 'PINGÜINO', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoP = this.add.image(350, 435, 'fotoPinguino').setScale(0.32).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Pingüino', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }    
  }

  update()
  {

  }
}

