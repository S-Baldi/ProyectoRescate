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

    this.add.text(245, 360, '¿Cuál es la causa por la cual \n el yaguareté se encuentra en vía de extición?', {font: 'bold 30pt Arial', fontSize: '10px', align:'center',});  
    
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
    }
  }

}
