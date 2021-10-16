import Phaser from 'phaser'
export default class extras extends Phaser.Scene
{
  constructor()
  {
    super('extras');
  }

  preload(){    
  }

  create()
  {
    const fondoMenu = this.add.image(683, 384, 'menuExtras').setScale(0.75);

    const buttonAtras = this.add.image(1260, 105, 'botonatras').setScale(0.8)
    .setInteractive()
    .on('pointerdown', () => this.scene.start('menuPpal'));
    
    var puntaje= 9;
    
    //Yaguarete
    if(puntaje<3)
    {
      const buttonDesbloqueableYaguarete = this.add.image(300, 250, 'botonYaguarete').setScale(0.75);
    }
    else
    {
      let buttonInfoYaguarete = this.add.image(200, 250, 'infoYaguarete').setScale(0.9) &&
      this.add.text(300, 220, 'YAGUARETÉ', {font: 'bold 40pt Arial', fontSize: '10px', align:'center'})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && this.scene.manager.scenes[14].mostrarInfo('yaguareteInformation') && this.scene.pause()) ;
      
    }

    //Mono
    if(puntaje<6)
    {
      const buttonDesbloqueableMono = this.add.image(300, 450, 'botonMono').setScale(0.75);
    }
    else
    {
      let buttonInfoMono = this.add.image(200, 450, 'infoMono').setScale(1.1) &&
      this.add.text(300, 420, 'MONO', {font: 'bold 40pt Arial', fontSize: '10px', align:'center'})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && this.scene.pause()) ;  
    }

    //Condor
    if(puntaje<9)
    {
      const buttonDesbloqueableCondor = this.add.image(300, 650, 'botonCondor').setScale(0.75);
    }
    else
    {
      let buttonInfoCondor = this.add.image(200, 650, 'infoCondor').setScale(0.8) &&
      this.add.text(300, 620, 'CONDOR', {font: 'bold 40pt Arial', fontSize: '10px', align:'center'})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && this.scene.pause()) ;   
    }

    //Ballena
    if(puntaje<12)
    {
      const buttonDesbloqueableBallena= this.add.image(1000, 350, 'botonBallena').setScale(0.75);
    }
    else
    {
      let buttonInfoBallena = this.add.image(950, 350, 'infoBallena').setScale(1) &&
      this.add.text(1050, 320, 'BALLENA', {font: 'bold 40pt Arial', fontSize: '10px', align:'center'})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && this.scene.pause()) ;  
    }

    //Pingüino
    if(puntaje<15)
    {
      const buttonDesbloqueablePinguino = this.add.image(1000, 550, 'botonPinguino').setScale(0.75);
    }
    else
    {
      let buttonInfoPinguino = this.add.image(950, 550, 'infoPinguino').setScale(0.9) &&
      this.add.text(1050, 520, 'PINGÜINO', {font: 'bold 40pt Arial', fontSize: '10px', align:'center'})
      .setInteractive() 
      .on('pointerdown', () => this.scene.launch('pop_up_E') && this.scene.pause()) ;  
    }  
  }
}