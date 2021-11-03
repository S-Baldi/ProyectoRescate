import Phaser from 'phaser'
import obstaclesController from '../obstaclesController'
import monoController from './monoController'
import cazadorController from './cazadorController'
export default class nivel_2 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private mono?: Phaser.Physics.Matter.Sprite
  private monoController?: monoController
  private cazador?: Phaser.Physics.Matter.Sprite
  private cazadorController?: cazadorController
  private obstacles!: obstaclesController  
  private banderasMono?: Phaser.Physics.Matter.Sprite

  constructor(){
    super('nivelMono')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()  
    this.obstacles = new obstaclesController()        
  }

  preload()
  {
    this.load.tilemapTiledJSON('mapa_nivel2', 'assets/Nivel2/nivel_Mono.json');
    this.load.image('nivel2Fondo','assets/Nivel2/nivel2_fondo.png');
    this.load.image('nivel2Suelo','assets/Nivel2/nivel2_suelo.png');
    this.load.image('nivel2Banana','assets/Nivel2/nivel2_comida.png');
    this.load.image('nivel2Rama', 'assets/Nivel2/nivel2_rama.png');
    this.load.image('nivel2Bandera', 'assets/Nivel2/bandera.png');    
    this.load.atlas('nivel2Cria', 'assets/Nivel2/criaMono.png', 'assets/Nivel2/criaMono.json');
    this.load.atlas('cazador', 'assets/Nivel2/cazador.png', 'assets/Nivel2/cazador.json');
    this.load.atlas('mono', 'assets/Nivel2/mono.png', 'assets/Nivel2/mono.json');

    this.load.tilemapTiledJSON('NivelMonoTest', 'assets/Nivel2/nivel_MonoTest.json');
  }

  create(){
    this.scene.launch('uiMono')
    const mapa_nivel2 = this.make.tilemap({key: 'mapa_nivel2'});
    const fondo_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_fondo', 'nivel2Fondo');
    const suelo_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_suelo', 'nivel2Suelo');
    const ramas_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_rama', 'nivel2Rama')

    const fondo_nivel2 : Phaser.Tilemaps.TilemapLayer =
    mapa_nivel2.createLayer('nivel2Fondo', fondo_nivel2_tiled, 0, 0);

    const suelo_nivel2 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel2.createLayer('nivel2Suelo', suelo_nivel2_tiled, 0, 0);
    
    suelo_nivel2.setCollisionByProperty({solido: true});

    const ramas_nivel2 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel2.createLayer('nivel2Plataformas', ramas_nivel2_tiled, 0, 0);
    
    ramas_nivel2.setCollisionByProperty({plataforma: true}); 

    this.cameras.main.setBounds(0, 0, mapa_nivel2.widthInPixels, mapa_nivel2.heightInPixels);

    const objectsLayer = mapa_nivel2.getObjectLayer('nivel2Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'mono':
				{
					this.mono = this.matter.add.sprite(x + (width * 0.5), y, 'mono');
          this.mono.setScale(0.8);
          this.mono.setBounce(0);
          this.mono.setRectangle(100,90);
          this.mono.setFixedRotation();
					this.monoController = new monoController(
						this,
						this.mono,
						this.cursors,
						this.obstacles
          );

					this.cameras.main.startFollow(this.mono, true, 1, 1, -400)
					break
				}
        
        case 'cazador':
        {
          this.cazador = this.matter.add.sprite(x + (width * 0.5), y, 'cazador');
          this.cazador.setScale(0.7)
          this.cazador.setFixedRotation()
          
          this.cazador.setData('type', 'cazador')

          this.cazadorController = new cazadorController(
            this.cazador
          )
          break
        }
        
        case 'hitBoxSuelo':
        {
          const hitBoxSuelo = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('hitBoxSuelo', hitBoxSuelo)
          break
        }
        case 'bandera':
        {

          this.banderasMono = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'nivel2Bandera',
          undefined, {
            isStatic: true,
            isSensor: true
          }).setScale(0.4)
          this.banderasMono.setData('type', 'bandera')
          break
        }
        
        case 'banana':
        {
          const banana = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'nivel2Banana', undefined, {
						isStatic: true,
            isSensor: true
          }).setScale(1)
          banana.setData('type', 'banana')
          break
        }

        case 'cria':
        {
          const monoCria = this.matter.add.sprite(x+ (width*0.5), y+(height*0.5), 'nivel2Cria', undefined,{
            isStatic : true,
            isSensor: true
          })
          monoCria.setData('type', 'cria')
          break
        }
      }
      
		})
    this.matter.world.convertTilemapLayer(suelo_nivel2)
		this.matter.world.convertTilemapLayer(ramas_nivel2)
}
  update(t: number, dt: number)
  {
    this.monoController?.update(dt)
    this.cazadorController?.update(dt)
  }  
}



