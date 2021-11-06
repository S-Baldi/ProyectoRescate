import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';

export default class pop_upExt extends Phaser.Scene
{
  private espacioRenglones = 25
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

  private fuentePinguino =
  { fontFamily: 'Titan One',
    fontSize: '40pt',
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
    const buttonAtras = this.add.image(1120, 150, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('extras') && sonidoButton.play({volume:0.5}));    
  }  

  public mostrarInfo(info:string)
  {
    if (info=='yaguareteInformation') 
    {
      const tituloPopUpY= this.add.text(500, 80, getPhrase('YAGUARETÉ'), this.fuenteNombres).setDepth(3);
      const fotoY = this.add.image(350, 400, 'fotoYaguarete').setScale(0.85).setDepth(3);

      //DIFERENCIA DE 40 ENTRE TEXTO Y TEXTO,
      //Espaciado de -5 (lineSpacing: -5)
      this.add.text(540, 170, getPhrase('Nombre científico: Panthera onca'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 210, getPhrase('Longitud: 1,1m a 2,50m'), this.fuenteTexto ).setDepth(3)
      this.add.text(540, 250, getPhrase('Altura: 63cm a 76cm'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 290, getPhrase('Peso: 56kg a 96kg'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 330, getPhrase('Distribución: Noreste de Argentina'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 370, getPhrase('Estado de Conservación: Casi Amenazado'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 410, getPhrase('Dieta: pecaríes, carpinchos, yacarés, venados, tapires'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 450, getPhrase('Quedan menos de 250 Yaguaretés en todo el país'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 490, getPhrase('Es el felino más grande del continente americano'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 530, getPhrase('Abarcan 40.000 hectáreas en la región chaqueña'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 570, getPhrase('Amenazados por la caza furtiva'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 610, getPhrase('Declarado como Monumento Natural Nacional'), this.fuenteTexto).setDepth(3)
    }     
    
    if (info=='monoInformation')
    {
      const tituloPopUpM= this.add.text(280, 80, getPhrase('     MONO CAPUCHINO'), this.fuenteNombres).setDepth(3);
      const fotoM = this.add.image(350, 400, 'fotoMono').setScale(0.88).setDepth(3);
      this.add.text(540, 170+this.espacioRenglones, getPhrase('Nombre científico: Cebus apella'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 210+this.espacioRenglones, getPhrase('Longitud: 35cm a 49cm'), this.fuenteTexto ).setDepth(3)
      this.add.text(540, 250+this.espacioRenglones, getPhrase('Peso: 1,9kg a 3,9kg'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 290+this.espacioRenglones, getPhrase('Distribución: Norte de Argentina'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 330+this.espacioRenglones, getPhrase('Estado de Conservación: Preocupación menor'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 370+this.espacioRenglones, getPhrase('Dieta: frutos, semillas, néctar y invertebrados'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 410+this.espacioRenglones, getPhrase('Primate más inteligente de América Latina'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 450+this.espacioRenglones, getPhrase('Habitante de la selvas de Jujuy y Misiones'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 490+this.espacioRenglones, getPhrase('Amenazados por el tráfico y el comercio ilegal'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 530+this.espacioRenglones, getPhrase('Amenazas: pérdida y fragmentación de su hábitat'), this.fuenteTexto).setDepth(3)      
    }
    
    if (info=='condorInformation')
    {
      const tituloPopUpC= this.add.text(525, 130, 'CONDOR ANDINO', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoC = this.add.image(350, 435, 'fotoCondor').setScale(0.24).setDepth(3);
            
    }
    
    if (info=='ballenaInformation')
    {
      const tituloPopUpB= this.add.text(525, 130, 'BALLENA FRANCA', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const fotoB = this.add.image(350, 435, 'fotoBallena').setScale(0.39).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Ballena', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);      
    }
    
    if (info=='pinguinoInformation')
    {
      const tituloPopUpM= this.add.text(280, 80, getPhrase('PINGÜINO DE MAGALLANES'), this.fuentePinguino).setDepth(3);
      const fotoM = this.add.image(350, 400, 'fotoPinguino').setScale(0.88).setDepth(3);
      this.add.text(540, 170+this.espacioRenglones, getPhrase('N. científico: Spheniscus magellanicus'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 210+this.espacioRenglones, getPhrase('Altura: 60cm a 75cm'), this.fuenteTexto ).setDepth(3)
      this.add.text(540, 250+this.espacioRenglones, getPhrase('Peso: 2.5kg a 6.5kg'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 290+this.espacioRenglones, getPhrase('Distribución: Sureste Argentina'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 330+this.espacioRenglones, getPhrase('Estado de Conservación: Casi Amenazado'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 370+this.espacioRenglones, getPhrase('Dieta: sepia, calamar, krill, otros crustáceos'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 410+this.espacioRenglones, getPhrase('Cuerpo negro y abdomen blanco'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 450+this.espacioRenglones, getPhrase('Sur argentino, costa de la Patagonia Argentina'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 490+this.espacioRenglones, getPhrase('Los derrames de petróleo son su mayor amenaza'), this.fuenteTexto).setDepth(3)
      this.add.text(540, 530+this.espacioRenglones, getPhrase('Quedan atrapados en las redes y se ahogan en estas'), this.fuenteTexto).setDepth(3)      
    }    
  }
}

