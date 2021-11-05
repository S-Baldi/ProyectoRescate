import Phaser from 'phaser'

export default class pop_upExt extends Phaser.Scene
{
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '20pt',
  color: '#000000',
  align: 'justify',
  lineSpacing: 1
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
    const sonidoButton = this.sound.add('sonidoBoton');
    const fondoPopUpExtras = this.add.image(680, 390, 'popUpExtras').setScale(0.85)
    const buttonAtras = this.add.image(1080, 150, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('extras') && sonidoButton.play({volume:0.5}));    
  }  

  public mostrarInfo(info:string)
  {
    if (info=='yaguareteInformation') 
    {
      const tituloPopUpY= this.add.text(500, 80, 'YAGUARETÉ', this.fuenteNombres).setDepth(3);

      const fotoY = this.add.image(350, 400, 'fotoYaguarete').setScale(0.85).setDepth(3);

      //DIFERENCIA DE 24 o 34 ENTRE TEXTO Y TEXTO, el doble para dos renglones
      //Espaciado de -5 (lineSpacing: -5)
      this.add.text(540, 170, 'Nombre científico: Panthera onca.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 204, 'Longitud: 1,1 a 2,50m.', this.fuenteTexto ).setDepth(3)
      this.add.text(540, 238, 'Altura: 63 a 76 cm.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 262, 'Peso: 56 a 96 kg.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 296, 'Distribución: Noreste de Argentina.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 330, 'Estado de Conservación: Casi Amenazado.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 364, 'Dieta:  pecaríes, carpinchos, yacarés, venados, tapires.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 398, 'Según la Red Yaguareté quedan menos de 250 \nYaguaretés adultos en todo el país.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 456, 'El yaguareté es el felino más grande del continente \namericano.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 514, 'Su territorio abarca 40.000 hectáreas en la región \nchaqueña.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 572, 'Es una de las especies que se encuentran más \namenazadas por la caza furtiva.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 630, 'Es una especie de la fauna argentina declarada como \nMonumento Natural Nacional.', this.fuenteTexto).setDepth(3)
    }     
    
    if (info=='monoInformation')
    {
      const tituloPopUpM= this.add.text(500, 80, 'MONO CAÍ', this.fuenteNombres).setDepth(3);
      const fotoM = this.add.image(350, 400, 'fotoMono').setScale(0.88).setDepth(3);
      this.add.text(540, 170, 'Nombre científico: Cebus apella.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 204, 'Longitud: 35 a 49 cm.', this.fuenteTexto ).setDepth(3)
      this.add.text(540, 238, 'Peso: 1,9 a 3,9 kg.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 262, 'Distribución: Norte de Argentina.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 296, 'Estado de Conservación: Preocupación menor.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 330, 'Dieta:  frutos, semillas, néctar y invertebrados.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 364, 'El mono capuchino es considerado el primate \nmás inteligente de America Latina.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 420, 'El mono capuchino es un gran habitante de la \nselvas de Jujuy y Misiones.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 477, 'Están amenazados por el tráfico y el comercio ilegal.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 514, 'Una de sus principales amenazas es la pérdida y \nfragmentación de su hábitat.', this.fuenteTexto).setDepth(3)      
    }
    
    if (info=='condorInformation')
    {
      const tituloPopUpC= this.add.text(525, 130, 'CONDOR', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoC = this.add.image(350, 435, 'fotoCondor').setScale(0.24).setDepth(3);
            
    }
    
    if (info=='ballenaInformation')
    {
      const tituloPopUpB= this.add.text(525, 130, 'BALLENA', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoB = this.add.image(350, 435, 'fotoBallena').setScale(0.39).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Ballena', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }
    
    if (info=='pinguinoInformation')
    {
      const tituloPopUpM= this.add.text(510, 80, 'PINGÜINO', this.fuenteNombres).setDepth(3);
      const fotoM = this.add.image(350, 400, 'fotoPinguino').setScale(0.88).setDepth(3);
      this.add.text(540, 170, 'Nombre científico: Spheniscus magellanicus.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 204, 'Altura: 60 a 75 cm.', this.fuenteTexto ).setDepth(3)
      this.add.text(540, 238, 'Peso: 2.5 a 6.5kg.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 262, 'Distribución: Sureste Argentina.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 296, 'Estado de Conservación: Casi Amenazado.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 330, 'Dieta: sepia, calamar, krill, otros crustáceos.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 364, 'Pingüino de Magallanes se distingue por su cuerpo \nnegro y abdomen blanco.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 428, 'Es típico del sur argentino. A lo largo de la costa \nde la Patagonia Argentina.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 490, 'Los derrames de petróleo a lo largo de la costa \nArgentina son su mayor amenaza.', this.fuenteTexto).setDepth(3)
      this.add.text(540, 550, 'La redes son una gran amenaza para ellos. quedan \natrapados y se ahogan en estas.', this.fuenteTexto).setDepth(3)      
    }    
  }

  update()
  {

  }
}

