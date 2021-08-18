class mp1 extends Phaser.Scene{
  constructor(){
    super('menuPpal');
  }

  preload(){
    this.load.image('menu', 'assets/menuPpal.png');
  }

  create(){
    fondoMenu = this.add.image(683, 300, 'menu');
  }

  update(){

  }
}