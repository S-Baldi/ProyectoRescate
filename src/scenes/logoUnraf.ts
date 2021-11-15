import Phaser from 'phaser';
export default class logoUnraf extends Phaser.Scene
{
  private logo: any
  private tempo = 0
  preload(){    
    this.load.atlas('logoUnraf' , 'assets/Precarga/logoUnraf.png', 'assets/Precarga/logoUnraf.json');
  }

  create(){
    setTimeout(() => {
      this.logo = this.add.sprite(683, 383, "logoUnraf").setScale(6);
      this.logo.play("moveUnraf");
    }, 50);

    this.anims.create({
      key: 'moveUnraf',
      frames: this.anims.generateFrameNames('logoUnraf', {
        start: 1,
        end: 40,
        prefix: 'logoNro0',
        suffix: '.png'
      }),
      frameRate: 20
    })
  }
  update(delta){
    this.tempo += delta
    if (this.tempo >= 5000){
      this.scene.start('precarga'); 
    }
  }
}