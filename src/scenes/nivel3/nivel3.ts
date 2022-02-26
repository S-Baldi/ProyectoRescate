import Phaser from 'phaser'
import obstaclesController from '../obstaclesController';
import condorController from './condorController';
import avionController from './avionController';
import venenoController from './venenoController';
import criaCondorController from './criaCondorController';
import carneController from './carneController';

export default class nivel_3 extends Phaser.Scene
{
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;	
	private condor?: Phaser.Physics.Matter.Sprite;
  private condorController?: condorController;
  private obstacles!: obstaclesController;
  private avion?: Phaser.Physics.Matter.Sprite;
  private avionController?: avionController;
  private venenos?: Phaser.Physics.Matter.Sprite;
  private venenoController?: venenoController;
  private cria?: Phaser.Physics.Matter.Sprite;
  private criaCondorController?: criaCondorController;
  private carne?: Phaser.Physics.Matter.Sprite
  private carneController?: carneController
  private musicaBallena:any
  private estadoMusica:any;
  private sfxCria:any;
  private sfxComida:any;

  /* public musicaPlay()
  {
    this.musicaCondor.play({volume:0.3, loop: true})
  }
  public musicaPause()
  {
    this.musicaCondor.pause()
  } 
  public musicaResume()
  {
    this.musicaCondor.resume()
  }
  public detenerMusica()
  {  
    this.musicaCondor.stop()            
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
 */
  constructor(){
    super('nivelCondor')
  }

  init()
  {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.obstacles = new obstaclesController()
  }
  

  preload(){
    this.load.tilemapTiledJSON('mapa_nivel3', 'assets/Nivel3/nivel_Condor.tmj');
    //this.load.tilemapTiledJSON('condorTest', 'assets/Nivel3/nivel_Condor_Test.tmj');
    this.load.image('nivel3Fondo','assets/Nivel3/nivel3_fondo.png');    
    this.load.atlas('avion', 'assets/Nivel3/avion.png', 'assets/Nivel3/avion.json');
    //this.load.image('nivel3Bandera', '');  
    this.load.atlas('veneno', 'assets/Nivel3/veneno.png', 'assets/Nivel3/veneno.json');
    this.load.atlas('carne', 'assets/Nivel1/nivel1_carne.png', 'assets/Nivel1/nivel1_carne.json');
    //this.load.atlas('nivel3Cria','assets/Nivel3/criaCondor.png', 'assets/Nivel3/criaCondor.json');
    //this.load.atlas('condor', 'assets/Nivel3/condor.png', 'assets/Nivel3/condor.json');
  }

  create()
  {
    /* this.musicaBallena= this.sound.add('musicaCondor')
    this.sfxComida = this.sound.add('sfxComida')
    this.sfxCria = this.sound.add('sfxCria')
    this.estadoMusica=localStorage.getItem('musicaPlay')|| '0';
    if (this.estadoMusica=='1') 
    {
      this.musicaPlay()   
    } */


    //this.scene.launch('uiCondor')
    /* Tiled Nivel 3 */
    const mapa_nivel3 = this.make.tilemap({key: 'mapa_nivel3'});
    const fondo_nivel3_tiled = mapa_nivel3.addTilesetImage('nivel3_fondo', 'nivel3Fondo');

  /* Capas tiled */
    const fondo_nivel3 : Phaser.Tilemaps.TilemapLayer
    = mapa_nivel3.createLayer('nivel3Fondo', fondo_nivel3_tiled, 0, 0);
 
    this.cameras.main.setBounds(0, 0, mapa_nivel3.widthInPixels, mapa_nivel3.heightInPixels);

    //EMPEZANDO LA MAQUINA DE ESTADO
   const objectsLayer = mapa_nivel3.getObjectLayer('nivel3Objetos')

		objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				/* case 'condor':
				{
          //X=156,97
					this.condor = this.matter.add.sprite(x + (width * 0.5), y, 'condor')
          this.condor.setScale(1)
          this.condor.setBounce(0)
          this.condor.setRectangle(250,100)
          this.condor.setFixedRotation()

          this.condorController = new condorController(
						this,
						this.condor,
						this.cursors,
						this.obstacles
					)

					this.cameras.main.startFollow(this.condor, true, 1, 1, -500)
					break
				} */

        case 'avion': //altura 86,70
          {
            const venenoAvion = this.matter.add.rectangle(x + (width * 2.1), y + (height * 0.2), 60, 200, {
              isStatic: true
            })
            this.obstacles.add('avion', venenoAvion)

            const aviones = this.matter.add.rectangle(x +(width * 0.3) , y + (height * 0)-60, 350, 50, {
              isStatic: true
            })
            this.obstacles.add('avion', aviones)

            this.avion = this.matter.add.sprite(x + (width*0.5), y +(height*0.5), 'avion', undefined, {
              isStatic: true,
              isSensor:true
            })

            this.avionController = new avionController(
              this.avion,
            )
            break
          }
        
         case 'veneno': //ALTURA 590,30
          { 
            const veneno = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.7), 70, 230, {
            isStatic: true
            })
            this.obstacles.add('veneno', veneno)
            
            this.venenos = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'veneno', undefined, {
              isStatic: true,
              isSensor:true
            }).setScale(1)
  
            this.venenoController = new venenoController(
              this.venenos,
            )
            break
          } 

         case 'carne':
          {
            this.carne = this.matter.add.sprite(x+(width*0.5), y+(height*0.5), 'carne', undefined,{
              isStatic : true,
              isSensor: true
            }).setScale(1.5)
            this.carne.setData('type', 'carne')
            this.carneController = new carneController(
              this.carne
            )
            break
          } 
        
        /* case 'cria':
          {
            this.cria = this.matter.add.sprite(x+(width*0.5), y+(height*0.5), 'nivel3Cria', undefined,{
              isStatic : true,
              isSensor: true
            }).setScale(1.5)
            this.cria.setData('type', 'cria')
            this.criaCondorController = new criaCondorController(
              this.cria
            )
            break
          } */

        /* case 'bandera':
          {
            const bandera = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, 1200, {
              isStatic: true
            })
            this.obstacles.add('bandera', bandera)
  
            const banderas = this.matter.add.sprite(x + (width*0.5), y + (height*0.5), 'nivel3Bandera',
            undefined, {
              isStatic: true,
              isSensor: true
            }).setScale(1)
            break
          } */
        
         case 'hitBox':
        {
          const hitBox = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
          this.obstacles.add('hitBox', hitBox)
        } 
        
      }    
		})
  
		this.matter.world.convertTilemapLayer(fondo_nivel3) 
}

  update(t: number, dt: number){
    //this.condorController?.update(dt)
    this.avionController?.update(dt)
    this.venenoController?.update(dt)
    //this.criaCondorController?.update(dt)
    this.carneController?.update(dt) 
  }  
}



