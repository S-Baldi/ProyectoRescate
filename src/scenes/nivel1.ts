import Phaser from 'phaser'
import ObstaclesController from './obstaclesController'
import obstaclesController from './obstaclesController'
import yaguareteController from './yaguareteController'
export default class nivel_1 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys	
	private yaguarete?: Phaser.Physics.Matter.Sprite
  private yaguareteController?: yaguareteController
  private obstacles!: ObstaclesController

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
  /*this.load.image('nivel1Fondoo2', 'assets/Nivel1/nivel1_fondo2.png');
    this.load.image('nivel1Fondoo3','assets/Nivel1/nivel1_suelo.png'); */
    this.load.image('nivel1Sueloo','assets/Nivel1/nivel1_suelo.png');
    this.load.image('nivel1Carnee','assets/Nivel1/nivel1_carne.png');
    this.load.image('nivel1Trampaa','assets/Nivel1/nivel1_trampa.png'); 

    this.load.spritesheet('yaguarete', '/assets/Nivel1/yaguarete_y_cria.png', 
    {frameWidth:538 , frameHeight:300 });    
  
  }

  create(){
    /* Tiled Nivel 1 */
/*     addTilesetImage(tilesetName [, key] 
  [, tileWidth] [, tileHeight] [, tileMargin] [, tileSpacing] [, gid])
 */ const mapa_nivel1 = this.make.tilemap({key: 'mapa_nivel1'});
    const fondo_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_fondo', 'nivel1Fondoo');
   /*  const fondo2_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_fondo2', 'nivel1Fondoo2');
    const fondo3_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_fondo3', 'nivel1Fondoo3');
    */ const suelo_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_suelo', 'nivel1Sueloo');

  /*  const carne_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_carne', 'nivel1Carnee');
    const trampa_nivel1_tiled = mapa_nivel1.addTilesetImage('nivel1_trampa', 'nivel1Trampaa');
 */
  /* Capas tiled */
    const fondo_nivel1 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel1.createLayer('nivel1Fondo', fondo_nivel1_tiled, 0, 0);

    /* const fondo2_nivel1 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel1.createLayer('nivel1Fondo', fondo2_nivel1_tiled, 0, 0);

    const fondo3_nivel1 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel1.createLayer('nivel1Fondo', fondo3_nivel1_tiled, 0, 0);
 */
    const suelo_nivel1 : Phaser.Tilemaps.TilemapLayer = 
    mapa_nivel1.createLayer('nivel1Suelo', suelo_nivel1_tiled, 0, 0);    
    suelo_nivel1.setCollisionByProperty({solido: true});

    /* const carne_nivel1 = mapa_nivel1.createLayer('nivel1Alimento', carne_nivel1_tiled, 0, 0);
    const trampa_nivel1 = mapa_nivel1.createLayer('nivel1Trampa', trampa_nivel1_tiled, 0, 0);
   */
    /* if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
      teclaR = this.input.keyboard.addKey('R');
      teclaP = this.input.keyboard.addKey('P');
      teclaF = this.input.keyboard.addKey('F');
    } */

    
  /*   const yaguarete_nivel1 = this.matter.add.sprite(150, 200, 'yaguarete');
    yaguarete_nivel1.setScale(0.3) */
    /* yaguarete_nivel1.setVelocityX(200) *//* 
    yaguarete_nivel1.playAnimation('correr') */

    this.cameras.main.setBounds(0, 0, mapa_nivel1.widthInPixels, mapa_nivel1.heightInPixels);
/*     this.cameras.main.startFollow(yaguarete_nivel1);
 */    
    /* this.matter.add.collider(yaguarete_nivel1, suelo_nivel1); */
    /* this.physics.add.overlap(yaguarete_nivel1, carne_nivel1, this.juntarComidaNivel1, null, this); */

    var texto_puntaje_nivel1 = this.add.text(200, 200, 'Puntaje: ' + puntaje_nivel1 ,
    { font: 'bold 30pt Arial', fontSize: '36px', align:'center',})
    var puntaje_nivel1: any = 0;

    //EMPEZANDO LA MAQUINA DE ESTADO

    const objectsLayer = mapa_nivel1.getObjectLayer('nivel1Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				/* case 'yaguarete':
				{
					this.yaguarete = this.matter.add.sprite(x + (width * 0.5), y, 'yaguarete')
          .setScale(0.3)
				  .setFixedRotation()

					this.yaguareteController = new yaguareteController(
						this,
						this.yaguarete,
						this.cursors,
						this.obstacles
					)

					this.cameras.main.startFollow(this.yaguarete, true)
					break
				}	 */		

        case 'trampa':
        {
          const trampa = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
					this.obstacles.add('nivel1Trampaa', trampa)
					break
        }

        case 'carne':
        {
          const carne = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true 
          }) 
          this.obstacles.add('nivel1Carnee', carne)
          break
        }
      }

        
		})

		this.matter.world.convertTilemapLayer(suelo_nivel1)
  }

  update(){
    /* teclaF.on('down', function (){
      if (this.scale.isFullscreen)
      {
          this.scale.stopFullscreen();
      }
      else
      {
          this.scale.startFullscreen();
      }
    }, this); */

  /*   if (teclaR.isDown)
    {
      this.scene.restart();
      puntaje_nivel1 = 0
    }

    if (teclaP.isDown)
    {
      this.scene.start('menuMapa');
    } */

    /* if (cursors.right.isDown)
    {
      yaguarete_nivel1.setVelocityX(200);
      yaguarete_nivel1.anims.play('correr', true);
    }

    if ((cursors.up.isDown) && yaguarete_nivel1.body.blocked.down)
    {     
      yaguarete_nivel1.setVelocityY(-300);           
    } */
  }

  /* juntarComidaNivel1 (yaguarete_nivel1, carne_nivel1){
    carne_nivel1.disableBody(true, true);
    puntaje_nivel1 += 15; 
    texto_puntaje_nivel1.setText('Puntaje : ' + puntaje_nivel1);
  } */
  
  
}
function ground(ground: any) {
  throw new Error('Function not implemented.')
}

