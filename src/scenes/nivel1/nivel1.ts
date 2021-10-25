import Phaser from 'phaser'
import obstaclesController from '../obstaclesController'
import yaguareteController from './yaguareteController'
import cazadorController from './cazadorController'
import { sharedInstance as events } from '../eventCenter'
export default class nivel_1 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private yaguarete?: Phaser.Physics.Matter.Sprite
  private yaguareteController?: yaguareteController
  private cazador?: Phaser.Physics.Matter.Sprite
  private cazadorController?: cazadorController
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
    this.load.tilemapTiledJSON('mapa_nivel1', 'assets/Nivel1/nivel_Yaguarete.json');
    this.load.image('nivel1Fondoo','assets/Nivel1/nivel1_fondo.png');
    this.load.image('nivel1Sueloo','assets/Nivel1/nivel1_suelo.png');
    this.load.image('nivel1Carnee','assets/Nivel1/nivel1_carne.png');
    this.load.image('nivel1Cria', 'assets/Nivel1/criaYaguarete.png');
    this.load.image('nivel1Bandera', 'assets/Nivel1/bandera.png');
    this.load.atlas('yaguarete' , 'assets/Nivel1/yaguarete.png', 'assets/Nivel1/yaguarete.json');
    this.load.atlas('nivel1Trampaa','assets/Nivel1/trampa.png','assets/Nivel1/trampa.json'); 
    this.load.atlas('cazador', 'assets/Nivel1/cazador.png', 'assets/Nivel1/cazador.json');
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
          //X=156,97
					this.yaguarete = this.matter.add.sprite(x + (width * 0.5), y, 'yaguarete')
          this.yaguarete.setScale(0.8)
          this.yaguarete.setBounce(0)
          this.yaguarete.setRectangle(120,90)
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
        
        case 'cazador':
        {
          this.cazador = this.matter.add.sprite(x+ (width*0.5), y+(height*0.5), 'cazador', undefined)
          this.cazador.setScale(0.7)
          this.cazador.setFixedRotation()
          
          this.cazadorController = new cazadorController(
            this,
            this.cazador,
            this.obstacles
          )

          break
        }

        case 'trampa':
        { //La Y de trampa en capa de objetos es: Y=629
          //La Y de trampa en 0.85 es de Y=660
          const trampa = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('trampa', trampa)
          const trampas = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel1Trampaa', undefined, {
            isStatic: true,
            isSensor:true
          }).setScale(0.85)				
					break
          /* const trampa = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel1Trampaa', undefined, {
						isStatic: true ,
            isSensor: true 
					})  
          .setScale(0.85)
					break */
        }

        case 'bandera':
        { //Altura en Y de la bandera Y=458
          const bandera = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('bandera', bandera)
          const banderas = this.matter.add.sprite(x+ (width*0.5), y+(height*0.4), 'nivel1Bandera',
          undefined,{
            isStatic : true,
            isSensor: true
          }).setScale(0.4)
          break
        }
        
        case 'carne':
        {
          const carne = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel1Carnee', undefined, {
						isStatic: true,
            isSensor: true
          })
          carne.setData('type', 'carne')
          break
        }

        case 'cria':
        {
          const yaguareteCria = this.matter.add.sprite(x+ (width*0.5), y+(height*0.5), 'nivel1Cria', undefined,{
            isStatic : true,
            isSensor: true
          }).setScale(0.2)  
          yaguareteCria.setData('type', 'cria')
          break
        }
      }    
		})
  
		this.matter.world.convertTilemapLayer(suelo_nivel1)
}

  update(t: number, dt: number){
    this.yaguareteController?.update(dt)
    this.cazadorController?.update(dt)
  }  
}



