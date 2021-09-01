class nivel_1 extends Phaser.Scene{
  constructor(){
    super('nivelYaguarete')
  }

  preload(){
    this.load.image('nivel1Fondo', 'assets/Nivel1/nivel1_fondo.png');
    this.load.spritesheet('nivel1Yaguarete', 'assets/Nivel1/nivel1_yaguarete.png', 
    {frameWidth:538 , frameHeight:300 });
    this.load.image('nivel1Suelo', 'assets/Nivel1/nivel1_suelo.png');
    this.load.image('nivel1Carne', 'assets/Nivel1/nivel1_carne2.png');
  }

  create(){
    
    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
      teclaR = this.input.keyboard.addKey('R');
      teclaP = this.input.keyboard.addKey('P');
      teclaF = this.input.keyboard.addKey('F');
    }

    this.anims.create({
      key: 'correr',
      frames: this.anims.generateFrameNumbers('nivel1Yaguarete', 
      {start:0, end: 2,}),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'turn',
      frames: [ { key: 'nivel1Yaguarete', frame: 1 } ],
      frameRate: 10
    });

    yaguarete_nivel1 = this.physics.add.sprite(150, 631, 'nivel1Yaguarete');
    yaguarete_nivel1.setScale(0.3)
    /* yaguarete_nivel1.setVelocityX(200) *//* 
    yaguarete_nivel1.playAnimation('correr') */
    
    this.physics.add.collider(yaguarete_nivel1, suelo_nivel1);
    this.physics.add.overlap(yaguarete_nivel1, carne_nivel1, this.juntarComidaNivel1, null, this);

    texto_puntaje_nivel1 = this.add.text(200, 200, 'Puntaje: ' + puntaje_nivel1,
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center',})
  }

  update(){
    teclaF.on('down', function (){
      if (this.scale.isFullscreen)
      {
          this.scale.stopFullscreen();
      }
      else
      {
          this.scale.startFullscreen();
      }
    }, this);

    if (teclaR.isDown)
    {
      this.scene.restart();
      puntaje_nivel1 = 0
    }

    if (teclaP.isDown)
    {
      this.scene.start('menuMapa');
    }

    if (cursors.right.isDown)
    {
      yaguarete_nivel1.setVelocityX(200);
      yaguarete_nivel1.anims.play('correr', true);
    }

    if ((cursors.up.isDown) && yaguarete_nivel1.body.blocked.down)
    {     
      yaguarete_nivel1.setVelocityY(-300);           
    }
  }

  juntarComidaNivel1 (yaguarete_nivel1, carne_nivel1){
    carne_nivel1.disableBody(true, true);
    puntaje_nivel1 += 15;
    texto_puntaje_nivel1.setText('Puntaje : ' + puntaje_nivel1);
  }
  
}
