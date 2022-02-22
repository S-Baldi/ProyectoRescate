import Phaser from 'phaser'
import obstaclesController from '../obstaclesController'
import ballenaController from './ballenaController'
import criaBallenaController from './criaBallenaController'
import basuraController from './basuraController'
import krillController from './krillController'

export default class nivel_4 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;	
	private ballena?: Phaser.Physics.Matter.Sprite;
  private ballenaController?: ballenaController;
  private cria?: Phaser.Physics.Matter.Sprite;
  private criaBallenaController?: criaBallenaController;
  private krill?: Phaser.Physics.Matter.Sprite;
  private krillController?: krillController;
  private basuras?: Phaser.Physics.Matter.Sprite;
  private basuraController?: basuraController;
  private obstacles!: obstaclesController;
  private musicaBallena:any;
  private estadoMusica:any;
  private sfxCria:any;
  private sfxComida:any;

  public musicaPlay()
  {
    this.musicaBallena.play({volume:0.3, loop: true})
  }
  public musicaResume()
  {
    this.musicaBallena.resume()
  }
  public detenerMusica()
  {  
    this.musicaBallena.stop()            
  }
  ///////Cria
  public sfxCriaPlay()
  {
    this.sfxCria.play({volume:0.03})
  } 
  public detenerSFXCria()
  {  
    this.sfxCria.stop()            
  }
  ///////Comida
  public sfxComidaPlay()
  {
    this.sfxComida.play({volume:0.05})
  }
  public detenerSFXComida()
  {  
    this.sfxComida.stop()            
  } 

  constructor(){
    super('nivelBallena')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()  
    this.obstacles = new obstaclesController()        
  }

  preload(){
    this.load.tilemapTiledJSON('mapa_nivel4', 'assets/Nivel4/nivel_Ballena.tmj');    
    this.load.tilemapTiledJSON('ballenaTest', '');
    this.load.image('nivel4Fondo','assets/Nivel4/nivel4_fondo.png'); 
    this.load.image('nivel4Bandera', 'assets/Nivel4/banderaBallena.png');
    this.load.atlas('basura', 'assets/Nivel4/basura.png', 'assets/Nivel4/basura.json');
    this.load.atlas('nivel4Krill', 'assets/Nivel4/krill.png', 'assets/Nivel4/krill.json');
    this.load.atlas('nivel4Cria','assets/Nivel4/criaBallena.png', 'assets/Nivel4/criaBallena.json');
    this.load.atlas('ballena', 'assets/Nivel4/ballena.png', 'assets/Nivel4/ballena.json');
  }

  create()
  {
    this.musicaBallena= this.sound.add('musicaBallena')
    this.sfxComida = this.sound.add('sfxComida')
    this.sfxCria = this.sound.add('sfxCria')
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()   
    }
    this.scene.launch('uiBallena')

    /* Tiled Nivel 5 */
    const mapa_nivel4 = this.make.tilemap({key: 'mapa_nivel4'});
    const fondo_nivel4_tiled = mapa_nivel4.addTilesetImage('nivel4_fondo', 'nivel4Fondo');
    /* const suelo_nivel4_tiled = mapa_nivel4.addTilesetImage('nivel4_suelo', 'nivel4Suelo'); */

  /* Capas tiled */
    const fondo_nivel4 : Phaser.Tilemaps.TilemapLayer
    = mapa_nivel4.createLayer('nivel4Fondo', fondo_nivel4_tiled, 0, 0);

    /* const suelo_nivel5 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel4.createLayer('nivel4Suelo', suelo_nivel4_tiled, 0, 0);
    suelo_nivel5.setCollisionByProperty({solido: true}); */
 
    this.cameras.main.setBounds(0, 0, mapa_nivel4.widthInPixels, mapa_nivel4.heightInPixels);

    //EMPEZANDO LA MAQUINA DE ESTADO
    const objectsLayer = mapa_nivel4.getObjectLayer('nivel4Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'ballena':
				{
          //X=156,97
					this.ballena = this.matter.add.sprite(x + (width * 0.5), y, 'ballena')
          this.ballena.setScale(0.8)
          this.ballena.setBounce(0)
          this.ballena.setRectangle(120,90)
          this.ballena.setFixedRotation()

          this.ballenaController = new ballenaController(
						this,
						this.ballena,
						this.cursors,
						this.obstacles
					)

					this.cameras.main.startFollow(this.ballena, true, 1, 1, -500)
					break
				}

        case 'basura':
        { 
          const basura = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), 200, 200, {
          isStatic: true
					})
          this.obstacles.add('basura', basura)
          
          this.basuras = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'basura', undefined, {
            isStatic: true,
            isSensor:true
          }).setScale(1)

          this.basuraController = new basuraController(
            this.basuras,
          )
					break
        }

       /*  case 'banderaPinguino':
        {
          const banderaPinguino = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, 1200, {
						isStatic: true
					})
          this.obstacles.add('banderaPinguino', banderaPinguino)

          const banderasPinguino = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'nivel4Bandera',
          undefined, {
            isStatic: true,
            isSensor: true
          }).setScale(1)
          break
        } */
        
        case 'krill':
        {
          this.krill = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel4Krill', undefined, {
						isStatic: true,
            isSensor: true
          }).setScale(1.5)
          this.krill.setData('type', 'krill')
          this.krillController = new krillController(
            this.krill
          )
          break
        }

        case 'cria':
        {
          this.cria = this.matter.add.sprite(x+(width*0.5), y+(height*0.5), 'nivel4Cria', undefined,{
            isStatic : true,
            isSensor: true
          })
          this.cria.setData('type', 'cria')
          this.criaBallenaController = new criaBallenaController(
            this.cria
          )
          break
        }

        /* case 'hitBoxCielo':
        {
          const hitBoxCielo = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('hitBoxCielo', hitBoxCielo)
        } */
      }    
		})
  
		this.matter.world.convertTilemapLayer(fondo_nivel4)
}

  update(t: number, dt: number){
    this.ballenaController?.update(dt)
    this.criaBallenaController?.update(dt)
    this.krillController?.update(dt)    
    this.basuraController?.update(dt)
  }  
}



