import Phaser from 'phaser'

export default class pop_upExt extends Phaser.Scene
{
  
  constructor()
  {
    super('pop_up_E');
  }

  preload()
  {
    this.load.image('botonNivel', 'assets/Mapa/botonMapa.png');
    this.load.image('fotoYaguarete', 'assets/MenuPrincipal/YaguareteExtras2.png');
  }
  
  create()
  {
    const fondoPopUpExtras = this.add.image(680, 425, 'botonNivel').setScale(1.1);
    const buttonAtras = this.add.image(1000, 150, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.stop() && this.scene.resume('extras'));    
  }  

  public mostrarInfo(info:string)
  {
    if (info='yaguareteInformation') 
    {
      const tituloPopUpY= this.add.text(525, 130, 'YAGUARETÉ', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);

      const fotoFamiliarY = this.add.image(350, 435, 'fotoYaguarete').setScale(0.8).setDepth(4);

      const txtYagua = this.add.text(500, 250, 'El nombre yaguareté es de origen guaraní y \nsignifica “la verdadera fiera”. Este gato, cuyo \nnombre científico es Panthera onca, es el felino \nmás grande del continente americano y tercero \nen corpulencia a escala mundial, después del tigre \nde bengala y el león. Se destaca por su aspecto \nrobusto y la cabeza proporcionalmente grande con \npoderosa estructura mandibular. Los machos \nalcanzan los 2,50 metros de longitud, incluida la \ncola, y hasta 140 kg de peso. Además el yaguareté \nes un excelente nadador, un caminador incansable, \nsolitario y muy territorial.', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);
    } 
    
    if (info='monoInformation')
    {
      const tituloPopUpY= this.add.text(525, 130, 'MONO', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Mono', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);
    }
    
    if (info='condorInformation')
    {
      const tituloPopUpY= this.add.text(525, 130, 'CONDOR', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Condor', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);
    }
    
    if (info='ballenaInformation')
    {
      const tituloPopUpY= this.add.text(525, 130, 'BALLENA', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Ballena', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);
    }
    
    if (info='pinguinoInformation')
    {
      const tituloPopUpY= this.add.text(525, 130, 'PINGÜINO', {font: 'bold 40pt Arial', align:'center', color: 'black'}).setDepth(3);
      const txtYagua = this.add.text(500, 250, 'Hola Pingüino', {font: 'bold 20pt Arial', color: 'black'}).setDepth(3);
    }
  }

  update()
  {

  }
}

