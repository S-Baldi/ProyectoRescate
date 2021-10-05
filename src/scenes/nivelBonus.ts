import Phaser from 'phaser'
export default class bonus extends Phaser.Scene
{
  constructor()
  {
    super('nivelBonus');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/NivelBonus.png');
    this.load.image('yaguaBonus', 'assets/Mapa/imagenYagua.png');
  }

  create()
  {
    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuMapa'))

    const portada = this.add.image(683, 235, 'yaguaBonus').setScale(1.28);

    const pregunta = 
    [
      '¿Cuál es la causa por la cual el \n yaguareté se encuentra en vía de extición?',
      '¿Cuantas crias tienen al año?'

    ];

     

    const respuesta = 
    [
      ['Todas son correctas', 'Caza furtiva', 'Deforestación', 'Reducción de sus presas'],
      ['1', '2', '3', 'Todas son correctas']

    ]

    let indice_aleatorio = Math.floor(Math.random()*pregunta.length);
    
    const respuestas_posibles= respuesta[indice_aleatorio];

    const posiciones= [0, 1, 2, 3];
    const reordenamiento_respuestas = [];
    

    for( i in respuestas_posibles) 
    {
      const posicionAleatoria = Math.floor(Math.random()*posiciones.length);
      reordenamiento_respuestas[i] = respuestas_posibles[posiciones [posicionAleatoria]];
      posiciones.splice(posicionAleatoria, 1);
    }
    
    
    /* let txt_respuesta = "";
    for(const i in respuestas_posibles) 
    {
      txt_respuesta += '<input typ ="radio"<>label>' +respuestas_posibles[i]+'</label>';
    } */

    const text_pregunta = this.add.text(245, 360, pregunta[indice_aleatorio], {font: 'bold 30pt Arial', fontSize: '10px', align:'center',});

    const text_respuestas= this.add.text(280, 515, respuesta[indice_aleatorio], {font: 'bold 30pt Arial', fontSize: '10px', align:'center',});

    

    /* this.add.text(245, 360, '¿Cuál es la causa por la cual \n el yaguareté se encuentra en vía de extición?', {font: 'bold 30pt Arial', fontSize: '10px', align:'center',});  
    
    let respuesta = Phaser.Math.Between(1, 4);
    console.log(respuesta)

    if (respuesta == 1)
    {
      this.add.text(280, 515, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(280, 515, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(280, 660, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(280, 660, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));   

      this.add.text(805, 515, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(805, 515, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(850, 660, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(850, 660, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', color: "green", align:'center'}));

    }
      
    if (respuesta == 2)
    {
      this.add.text(280, 660, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(280, 660, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', color: "green", align:'center'}));

      this.add.text(280, 515, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'}) 
      .setInteractive()
      .on('pointerdown', () => this.add.text(280, 515, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(805, 660, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(805, 660, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(850, 515, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(850, 515, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', color: "green", align:'center'}));
    }

    if (respuesta == 3)
    {
      this.add.text(930, 515, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(930, 515, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(930, 660, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(930, 660, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(155, 515, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'}) 
      .setInteractive()
      .on('pointerdown', () => this.add.text(155, 515, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(200, 660, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(200, 660, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', color: "green", align:'center'}));
    }

    if (respuesta == 4)
    {
      this.add.text(930, 660, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(930, 660, 'Caza furtiva', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(930, 515, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () =>  this.add.text(930, 515, 'Deforestación', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(155, 660, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'})
      .setInteractive()
      .on('pointerdown', () => this.add.text(155, 660, 'Reducción de sus presas', {font: 'bold 30pt Arial', fontSize: '36px', color: "red", align:'center'}));

      this.add.text(200, 515, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', align:'center'}) 
      .setInteractive()
      .on('pointerdown', () =>this.add.text(200, 515, 'Todas son correctas', {font: 'bold 30pt Arial', fontSize: '36px', color: "green", align:'center'}));
    } */

  }

}
