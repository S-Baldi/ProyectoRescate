import Phaser from 'phaser'
import { getPhrase } from '~/services/translation';
import preguntasMono from './preguntasMono';
export default class bonusMono extends Phaser.Scene{
  
  private fuenteTexto =     
  {fontFamily: 'Viga',
  fontSize: '30pt',
  color: '#000000',
  align: 'center'
  };

  private fuenteTextoPreg =     
  {fontFamily: 'Viga',
  fontSize: '25pt',
  color: '#000000',
  align: 'center'
  };
  private estadoMusica:any;
  private sonidoButton:any;
  public sfxDetenido()
  {
    this.sonidoButton.stop()
  }
  public sfxPlay()
  {
    this.sonidoButton.play({volume:0.5})
  }
  
  private musicaBonus:any
  public musicaPlay()
  {
    this.musicaBonus.play({volume:0.2})
  } 
  
  public detenerMusica()
  {  
    this.musicaBonus.stop()            
  }

  constructor()
  {
    super('nivelBonusMono');
  }

  preload()
  {
    this.load.image('Bonus', 'assets/Mapa/BonusYaguarete/NivelBonus.png');
    this.load.image('yaguaBonus', 'assets/Mapa/BonusYaguarete/imagenYagua.png');
    this.load.image('yaguaretePic', 'assets/Mapa/BonusYaguarete/yaguarete.png');
  }

  create()
  {  
    this.musicaBonus= this.sound.add('Bonus')
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()
    }
    this.sonidoButton = this.sound.add('sonidoBoton');

    const fondoBonus = this.add.image(683, 384, 'Bonus');

    const buttonAtras = this.add.image(1260, 105, 'botonatras')
    .setInteractive()
    .on('pointerover', () => buttonAtras.setScale(1.1))
    .on('pointerout', () => buttonAtras.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    { 
      this.scene.start('menuMapa') 
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.detenerMusica()
    })

    const portada = this.add.image(874, 235, 'yaguaretePic').setScale(0.7);
    const portada2 = this.add.image(496, 235, 'yaguaBonus').setScale(1.35);
    
    let preguntasBonus= new Array<preguntasMono>()
    preguntasBonus.push(new preguntasMono
    (getPhrase('En América del Sur el mono capuchino es considerado el animal más...'), 
    getPhrase('Inteligente'),
    getPhrase('Tonto'),
    getPhrase('Agresivo'),
    getPhrase('Loco')))
    
    const text_pregunta = this.add.text(130, 390, preguntasBonus[0].pregunta, this.fuenteTextoPreg);

    preguntasBonus[0].respuestasRandom()

    ////////////////////////////////////////////////////////BOTONES//////////////////////////////////////////////////////////////////////////////////
    
    let boton1= this.add.text(150, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {
      boton1.setColor(this.scene.launch('pop_up_BMono') &&        
      this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton1.text)))
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause()
    })

    
    let boton2 = this.add.text(150, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {
      boton2.setColor(this.scene.launch('pop_up_BMono') &&        
      this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton2.text)))
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause()
    })

    let boton3 = this.add.text(800, 513, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {
      boton3.setColor(this.scene.launch('pop_up_BMono') &&       
      this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton3.text)))
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause()
    })

    let boton4= this.add.text(800, 655, preguntasBonus[0].devolverPregunta()+"", this.fuenteTexto)
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => 
    {
      boton4.setColor(this.scene.launch('pop_up_BMono') &&        
      this.scene.get("pop_up_BMono").mostrar_Texto(preguntasBonus[0].revisarResp(boton4.text))) 
      if (this.estadoMusica=='1') 
      {
        this.sfxPlay()
      }
      this.scene.pause()
    })


    /* let cat = localStorage.getItem('nivelPasado');
    if (cat == 1){

    } */
  }
  
}


