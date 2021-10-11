import Phaser from 'phaser'
import obstaclesController from './obstaclesController'
import yaguareteController from './yaguareteController'
export default class nivel_1 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private yaguarete?: Phaser.Physics.Matter.Sprite
  private yaguareteController?: yaguareteController
  private obstacles!: obstaclesController  

  constructor(){
    super('nivelYaguarete')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()  
    this.obstacles = new obstaclesController()        
  }

  preload(){
    this.load.tilemapTiledJSON('mapa_nivel1', 'assets/Nivel1/nivel_Yaguarete2.json');
    this.load.image('nivel1Fondoo','assets/Nivel1/nivel1_fondo.png');
    this.load.image('nivel1Sueloo','assets/Nivel1/nivel1_suelo.png');
    this.load.image('nivel1Carnee','assets/Nivel1/nivel1_carne.png');
    this.load.atlas('nivel1Trampaa','assets/Nivel1/trampa.png','assets/Nivel1/trampa.json'); 
    this.load.image('nivel1Cria', 'assets/Nivel1/criaYaguarete.png');
    this.load.atlas('yaguarete' , 'assets/Nivel1/yaguarete.png', 'assets/Nivel1/yaguarete.json')
  }

  create(){
    this.scene.launch('ui')


    /* Tiled Nivel 1 */
/*     addTilesetImage(tilesetName [, key] 
  [, tileWidth] [, tileHeight] [, tileMargin] [, tileSpacing] [, gid])*/ 
    const mapa_nivel1 = this.make.tilemap({key: 'mapa_nivel1'});
    const fondo_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_fondo', 'nivel1Fondoo');
    const suelo_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_suelo', 'nivel1Sueloo');

  /* Capas tiled */
    const fondo_nivel1 : Phaser.Tilemaps.TilemapLayer
    = mapa_nivel1.createLayer('nivel1Fondo', fondo_nivel1_tiled, 0, 0);

    const suelo_nivel1 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel1.createLayer('nivel1Suelo', suelo_nivel1_tiled, 0, 0);
    suelo_nivel1.setCollisionByProperty({solido: true});

    this.cameras.main.setBounds(0, 0, mapa_nivel1.widthInPixels, mapa_nivel1.heightInPixels);   
    
    //EMPEZANDO LA MAQUINA DE ESTADO
    const objectsLayer = mapa_nivel1.getObjectLayer('nivel1Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'yaguarete':
				{
					this.yaguarete = this.matter.add.sprite(x + (width * 0.5), y, 'yaguarete')
          this.yaguarete.setBounce(0)          
          this.yaguarete.setRectangle(150,150)
          this.yaguarete.setFixedRotation()

          /* this.yaguarete.setDisplaySize(200, 200) */
          //Ocupar "setDisplaySize" en vez de "setScale"
          //"setRectangle" para cambiar la caja de colision
					this.yaguareteController = new yaguareteController(
						this,
						this.yaguarete,
						this.cursors,
						this.obstacles
					)

					this.cameras.main.startFollow(this.yaguarete, true)
					break
				}			

        case 'trampa':
        { //La Y de trampa en capa de objetos es: Y=629
          const trampa = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 
          'nivel1Trampaa', undefined, {
						isStatic: true,
            isSensor: true
					})
          .setScale(0.9)
          //.setSensor(true)
					break
        }
        
        case 'carne':
        {
          const carne = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel1Carnee', undefined, {
						isStatic: true,
            isSensor: true 
          })
          
          break
        }

        case 'cria':
        {
          const yaguareteCria = this.matter.add.sprite(x+ (width*0.5), y+(height*0.5), 'nivel1Cria', undefined,{
            isStatic : true,
            isSensor: true
          }).setScale(0.2)

        }
      }    
		})
  
		this.matter.world.convertTilemapLayer(suelo_nivel1)
}

  update(t: number, dt: number){
    this.yaguareteController?.update(dt)
  }  
  
}

function isSensor(arg0: number, y: number, arg2: string, isSensor: any, arg4: boolean) {
  throw new Error('Function not implemented.')
}

function setCollisionByProperty(arg0: { collides: boolean }): Phaser.Physics.Matter.Sprite {
  throw new Error('Function not implemented.')
}

