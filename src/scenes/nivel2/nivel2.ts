import Phaser from 'phaser'
import obstaclesController from '../obstaclesController'
import monoController from './monoController'
export default class nivel_2 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private mono?: Phaser.Physics.Matter.Sprite
  private monoController?: monoController
  private obstacles!: obstaclesController  

  constructor(){
    super('nivelMono')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()  
    this.obstacles = new obstaclesController()        
  }

  preload(){
    this.load.tilemapTiledJSON('mapa_nivel2', 'assets/Nivel2/nivel_Mono.json');
    this.load.image('nivel2Fondo','assets/Nivel2/nivel2_fondo.png');
    this.load.image('nivel2Suelo','assets/Nivel2/nivel2_suelo.png');
    this.load.image('nivel2Banana','assets/Nivel2/nivel2_comida.png');
    this.load.image('nivel2Rama', 'assets/Nivel2/nivel2_rama.png');
    this.load.image('nivel2Bandera', 'assets/Nivel2/bandera.png');    
    this.load.atlas('nivel2Cria', 'assets/Nivel2/criaMono.png', 'assets/Nivel2/criaMono.json');
    this.load.atlas('cazador', 'assets/Nivel2/cazador.png', 'assets/Nivel2/cazador.json');
    this.load.atlas('mono', 'assets/Nivel2/mono.png', 'assets/Nivel2/mono.json');

  }

  create(){
    this.scene.launch('uiMono')

    /* Tiled Nivel 5 */
    const mapa_nivel2 = this.make.tilemap({key: 'mapa_nivel2'});
    const fondo_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_fondo', 'nivel2Fondo');
    const suelo_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_suelo', 'nivel2Suelo');
    const ramas_nivel2_tiled = mapa_nivel2.addTilesetImage('nivel2_rama', 'nivel2Rama')

  /* Capas tiled */
    const fondo_nivel2 : Phaser.Tilemaps.TilemapLayer =
    mapa_nivel2.createLayer('nivel2Fondo', fondo_nivel2_tiled, 0, 0);

    const suelo_nivel2 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel2.createLayer('nivel2Suelo', suelo_nivel2_tiled, 0, 0);
    
    suelo_nivel2.setCollisionByProperty({solido: true});

    const ramas_nivel2 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel2.createLayer('nivel2Plataformas', ramas_nivel2_tiled, 0, 0);
    
    ramas_nivel2.setCollisionByProperty({plataforma: true}); 

    this.cameras.main.setBounds(0, 0, mapa_nivel2.widthInPixels, mapa_nivel2.heightInPixels); 
    
    //EMPEZANDO LA MAQUINA DE ESTADO
    const objectsLayer = mapa_nivel2.getObjectLayer('nivel2Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'mono':
				{
          //X=156,97
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

					this.cameras.main.startFollow(this.mono, true);
					break
				}
        
        case 'bandera':
        {
          const banderaMono = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, 1200, {
						isStatic: true
					})
          this.obstacles.add('bandera', banderaMono)

          const banderasMono = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'nivel2Bandera',
          undefined, {
            isStatic: true,
            isSensor: true
          }).setScale(0.4)
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

  update(t: number, dt: number){
    this.monoController?.update(dt)
  }  
}



