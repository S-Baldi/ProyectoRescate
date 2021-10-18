import { Body } from 'matter'
import Phaser from 'phaser' 
import StateMachine from '../../statemachine/StateMachine'
import { sharedInstance as events } from '../eventCenter'
import ObstaclesController from '../obstaclesController'

type CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys

export default class pipnguinoController
{
  private scene: Phaser.Scene
	private sprite: Phaser.Physics.Matter.Sprite
	private cursors: CursorKeys

  private stateMachine: StateMachine
  private obstacles: ObstaclesController

  constructor(scene: Phaser.Scene, 
		sprite: Phaser.Physics.Matter.Sprite, 
		cursors: CursorKeys, 
		obstacles: ObstaclesController) 
  {
    this.scene = scene
		this.sprite = sprite
		this.cursors = cursors
		this.obstacles = obstacles

    this.createAnimations()

		this.stateMachine = new StateMachine(this, 'pinguino')

		this.stateMachine.addState('swim', {
			onEnter: this.swimOnEnter,
			onUpdate: this.swimOnUpdate
		})
		.addState('swimUp', {
			onEnter: this.swimUpOnEnter,
			onUpdate: this.swimUpOnUpdate,
			onExit: this.swimUpOnExit
		})
		.addState('barcoHit',{
			onEnter: this.barcoHitOnEnter
		})
		.addState('banderaCollected',{
			onEnter: this.banderaCollected
		})
		.setState('swim')

    this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
      const body = data.bodyB as MatterJS.BodyType
			
			if (this.obstacles.is('barco', body))
			{
				this.stateMachine.setState('barcoHit')
				return
			}

      if (this.obstacles.is('barco2', body)){
        this.stateMachine.setState('barcoHit')
        return
      }

      if (this.obstacles.is('petroleo', body)){
        this.stateMachine.setState('barcoHit')
        return
      }  

      if(this.obstacles.is('petroleo2', body)){
        this.stateMachine.setState('barcoHit')
        return
      }

      if (this.obstacles.is('red', body)){
        this.stateMachine.setState('barcoHit')
        return
      }

      if (this.obstacles.is('hitBoxCielo', body)){
        this.stateMachine.setState('barcoHit')
        return
      }
			
			if (this.obstacles.is('bandera', body))
			{
				this.stateMachine.setState('banderaCollected')
				return				
			}	

      const gameObject = body.gameObject
			
			if (!gameObject)
			{
				return
			}

			if (gameObject instanceof Phaser.Physics.Matter.TileBody)
			{
				if (this.stateMachine.isCurrentState('swimUp'))
				{
					this.stateMachine.setState('swim')
				}
				return
			}
      
      const sprite = gameObject as Phaser.Physics.Matter.Sprite
			const type = sprite.getData('type')
      
      switch (type)
			{
				case 'cria':
				{
					sprite.destroy()
					events.emit('crias-collected')
					break
				}	

				case 'pez':
				{
					events.emit('comida-collected')
					sprite.destroy()
					break
				}
			}
		})
  }
  update(dt: number)
	{
		this.stateMachine.update(dt)	
	}

	//	IDLE
  private swimOnEnter()
	{
		this.sprite.play('pinguino-swim')		
	}

  private swimOnUpdate()
	{	
		this.sprite.setVelocityX(15)
		if (this.cursors.right.isDown)
		{
			this.stateMachine.setState('barcoHit')
		}

		if (this.cursors.up.isDown)
		{
			this.stateMachine.setState('swimUp')
		}
	}

		//NADO HACIA ARRIBA
  private swimUpOnEnter()
	{	
    this.sprite.stop()
		this.sprite.play('pinguino-swim')
		this.sprite.setVelocityY(-40)
		//this.sprite.setVelocityX(18)
	}

  private swimUpOnUpdate()
	{
    if (this.cursors.up.isDown){
      this.sprite.setVelocityY(-15)      
      this.sprite.setVelocityX(15)
    }
    if (this.cursors.up.isUp){
      this.sprite.setVelocityY(+5)
      this.sprite.setVelocityX(15)
    }		
	}

	private swimUpOnExit()
	{
		this.sprite.stop()
	}	


	private barcoHitOnEnter(){
		this.sprite.play('pinguino-death')		
		
		this.scene.time.delayedCall(1500, () => {
			//this.scene.scene.launch('gameOver') 
			this.scene.scene.pause()
      this.scene.scene.restart()
			//this.scene.scene.stop('ui')	
		})
	}

	private banderaCollected(){
		console.log('GANASTEEE')
				
		this.scene.scene.pause()
		this.scene.scene.stop('ui')		
		this.scene.scene.launch('gameWin')
	}
  
	//  									ANIMACIONES
  private createAnimations()
	{

		this.sprite.anims.create({
			key: 'pinguino-swim',
			frameRate: 8,
			frames: this.sprite.anims.generateFrameNames('pinguino', {
				start: 1,
				end: 10,
				prefix: 'pingu_Nro0',
				suffix: '.png'
			}),
			repeat: -1
		})

		this.sprite.anims.create({
			key: 'pinguino-death',
			frames: this.sprite.anims.generateFrameNames('pinguino', {
				start: 1,
				end: 2,
				prefix: 'pinguMuerte0',
				suffix: '.png'
			}),
			frameRate: 3
		})
	}
}