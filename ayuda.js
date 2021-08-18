class h1 extends Phaser.Scene{
  constructor(){
    super('ayuda');
  }

  preload(){
    
  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    teclas = this.add.image(400, 150, 'teclas').setScale(0.4);
    help2 = this.add.text(550, 90, 'Usa las flechas para mover al personaje.\nCon la flecha hacia abajo el personaje desciende rápido.\n "R": reiniciar el nivel. \n "P": volver al menú. \n "F": pantalla completa.' , 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    moneda = this.add.image(450, 360, 'coin').setScale(2);
    imgPerro = this.add.image(350, 360,'dogi').setScale(0.5);
    help2 = this.add.text (500, 340, 'Recolecta las monedas y salva a los perros para ganar puntos.', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    enemy = this.add.image(400, 520, 'robot').setScale(0.8);
    help2 = this.add.text (500, 520, 'No dejes que los enemigos te maten.', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    imgPower = this.add.image (400, 680, 'allPower').setScale(0.2);
    help2 = this.add.text (550, 670, 'Recolecta los orbes para obtener poderes.', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});



    volverMenu2 = this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu')&& button.play({volume:0.5}))
  }
}