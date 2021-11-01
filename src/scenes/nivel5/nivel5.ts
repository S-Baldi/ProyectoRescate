import Phaser from 'phaser'
import obstaclesController from '../obstaclesController'
import pinguinoController from './pinguinoController'
import petroleoController from './petroleoController'
export default class nivel_5 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private pinguino?: Phaser.Physics.Matter.Sprite
  private pinguinoController?: pinguinoController
  private petroleos?: Phaser.Physics.Matter.Sprite
  private petroleoController?: petroleoController
  private obstacles!: obstaclesController  

  constructor(){
    super('nivelPinguino')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()  
    this.obstacles = new obstaclesController()        
  }

  preload(){
    this.load.tilemapTiledJSON('mapa_nivel5', 'assets/Nivel5/nivel_Pinguino.json');
    this.load.image('nivel5Fondo','assets/Nivel5/nivel5_fondo.png');
    this.load.image('nivel5Suelo','assets/Nivel5/nivel5_suelo.png');
    this.load.image('nivel5Pez','assets/Nivel5/nivel5_comida.png');
    this.load.image('nivel5Cria', 'assets/Nivel5/criaPinguino.png');
    this.load.image('barco','assets/Nivel5/barco.png'); 
    this.load.image('barco2','assets/Nivel5/barco2.png');
    this.load.image('red', 'assets/Nivel5/red.png');
    this.load.atlas('petroleo', 'assets/Nivel5/petroleo.png', 'assets/Nivel5/petroleo.json');
    this.load.image('nivel5Bandera', 'assets/Nivel5/banderaPinguino.png');

    this.load.atlas('pinguino', 'assets/Nivel5/pinguino.png', 'assets/Nivel5/pinguino.json');

    this.load.tilemapTiledJSON('pinguinoTest', 'assets/Nivel5/nivel_PinguinoTest.json');

  }

  create(){
    this.scene.launch('uiPinguino')

    /* Tiled Nivel 5 */
    const mapa_nivel5 = this.make.tilemap({key: 'pinguinoTest'});
    const fondo_nivel5_tiled = mapa_nivel5.addTilesetImage('nivel5_fondo', 'nivel5Fondo');
    const suelo_nivel5_tiled = mapa_nivel5.addTilesetImage('nivel5_suelo', 'nivel5Suelo');

  /* Capas tiled */
    const fondo_nivel5 : Phaser.Tilemaps.TilemapLayer
    = mapa_nivel5.createLayer('nivel5Fondo', fondo_nivel5_tiled, 0, 0);

    const suelo_nivel5 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel5.createLayer('nivel5Suelo', suelo_nivel5_tiled, 0, 0);
    suelo_nivel5.setCollisionByProperty({solido: true});

    this.cameras.main.setBounds(0, 0, mapa_nivel5.widthInPixels, mapa_nivel5.heightInPixels);   
    
    //EMPEZANDO LA MAQUINA DE ESTADO
    const objectsLayer = mapa_nivel5.getObjectLayer('nivel5Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'pinguino':
				{
          //X=156,97
					this.pinguino = this.matter.add.sprite(x + (width * 0.5), y, 'pinguino')
          this.pinguino.setScale(0.8)
          this.pinguino.setBounce(0)
          this.pinguino.setRectangle(120,90)
          this.pinguino.setFixedRotation()

          /* this.pinguino.setDisplaySize(200, 200) */
          //Ocupar "setDisplaySize" en vez de "setScale"
          //"setRectangle" para cambiar la caja de colision

					this.pinguinoController = new pinguinoController(
						this,
						this.pinguino,
						this.cursors,
						this.obstacles
					)

					this.cameras.main.startFollow(this.pinguino, true)
					break
				}
        
        case 'barco':
        {
          const barco = this.matter.add.rectangle(x + (width * 0.9), y + (height * 0.4), 370, 170, {
            isStatic: true
          })
          this.obstacles.add('barco', barco)
          const red = this.matter.add.rectangle(x +(width * 0.5) -350 , y + (height * 0.2), 50, 370, {
            isStatic: true
          })
          this.obstacles.add('barco', red)
          const red2 = this.matter.add.rectangle(x +(width * 0.5) +400 , y + (height * 0.2), 50, 380, {
            isStatic: true
          })
          this.obstacles.add('barco', red2)
          const barcos = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'barco', undefined, {
            isStatic: true,
            isSensor:true
          })				
          break
        }

        case 'barco2':
        {
          const barco2 = this.matter.add.rectangle(x + (width * 0.9), y + (height * 0.4), 390, 270 , {
            isStatic: true
          })
          this.obstacles.add('barco2', barco2)

          const barcos2 = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'barco2', undefined, {
            isStatic: true,
            isSensor:true
          })				
          break
        }

        case 'red':
        {
          const red = this.matter.add.rectangle(x + (width * 0.4), y + (height * 0.5), width, 400, {
            isStatic: true
          })          
          this.obstacles.add('red', red)

          const reds = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'red', undefined, {
            isStatic: true,
            isSensor:true
          }).setScale(1.4)
          break
        }

        case 'petroleo':
        { 
          const petroleo = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), 90, 200, {
          isStatic: true
					})
          this.obstacles.add('petroleo', petroleo)
          
          this.petroleos = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'petroleo', undefined, {
            isStatic: true,
            isSensor:true
          }).setScale(1)

          this.petroleoController = new petroleoController(
            this,
            this.petroleos,
          )
					break
        }

        case 'petroleo2':
        { 
          const petroleo2 = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), 110, 270, {
          isStatic: true
					})
          this.obstacles.add('petroleo2', petroleo2)

          this.petroleos = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'petroleo', undefined, {
            isStatic: true,
            isSensor:true
          }).setScale(1, 1.3)

          this.petroleoController = new petroleoController(
            this,
            this.petroleos,
          )
					break
        }

        case 'banderaPinguino':
        {
          const banderaPinguino = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, 1200, {
						isStatic: true
					})
          this.obstacles.add('banderaPinguino', banderaPinguino)

          const banderasPinguino = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'nivel5Bandera',
          undefined, {
            isStatic: true,
            isSensor: true
          }).setScale(1)
          break
        }
        
        case 'pez':
        {
          const pez = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel5Pez', undefined, {
						isStatic: true,
            isSensor: true
          }).setScale(1.5)
          pez.setData('type', 'pez')
          break
        }

        case 'cria':
        {
          const pinguinoCria = this.matter.add.sprite(x+ (width*0.5), y+(height*0.5), 'nivel5Cria', undefined,{
            isStatic : true,
            isSensor: true
          })
          pinguinoCria.setData('type', 'cria')
          break
        }

        case 'hitBoxCielo':
        {
          const hitBoxCielo = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('hitBoxCielo', hitBoxCielo)
        }
      }    
		})
  
		this.matter.world.convertTilemapLayer(suelo_nivel5)
}

  update(t: number, dt: number){
    this.pinguinoController?.update(dt)
    this.petroleoController?.update(dt)
  }  
}



