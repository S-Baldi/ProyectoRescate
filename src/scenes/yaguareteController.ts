import Phaser from 'phaser' 
import StateMachine from '../statemachine/StateMachine'
import { sharedInstance as events } from './eventCenter'
import gameWin from './gameWin'
import ObstaclesController from './obstaclesController'

type CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys

export default class yaguareteController 
{
  private scene: Phaser.Scene
	private sprite: Phaser.Physics.Matter.Sprite
	private cursors: CursorKeys

  private stateMachine: StateMachine
	private health = 1
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

		this.stateMachine = new StateMachine(this, 'yaguarete')

		this.stateMachine.addState('idle', {
			onEnter: this.idleOnEnter,
			onUpdate: this.idleOnUpdate
		})
	/* 	.addState('walk', {
			onEnter: this.walkOnEnter,
			onUpdate: this.walkOnUpdate,
			onExit: this.walkOnExit
		}) */
		.addState('jump', {
			onEnter: this.jumpOnEnter,
			onUpdate: this.jumpOnUpdate,
			onExit: this.jumpOnExit
		})
		/* .addState('dead', {
			onEnter: this.deadOnEnter
		}) */
		.addState('trampaHit',{
			onEnter: this.trampaHitOnEnter
		})
		.addState('banderaCollected',{
			onEnter: this.banderaCollected
		})
		.setState('idle')

    this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
      const body = data.bodyB as MatterJS.BodyType
			
			if (this.obstacles.is('trampa', body))
			{
				console.log('MUERTO')
				this.stateMachine.setState('trampaHit')
				return
			}
			
			if (this.obstacles.is('bandera', body))
			{
				console.log('ganasteeeee')
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
				if (this.stateMachine.isCurrentState('jump'))
				{
					this.stateMachine.setState('idle')
				}
				return
			}
      
      const sprite = gameObject as Phaser.Physics.Matter.Sprite
			const type = sprite.getData('type')
      
      switch (type)
			{
				case 'cria':
				{
					console.log('CRIAS CRIAS CRIAS CRIAS')
					sprite.destroy()
					events.emit('crias-collected')
					break
				}
				

				case 'carne':
				{
					events.emit('comida-collected')
					sprite.destroy()
					break
				}

				case 'bandera':
				{
					events.emit('bandera-collected')
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
  private idleOnEnter()
	{
		this.sprite.play('yaguarete-walk')
		
			
	}

  private idleOnUpdate()
	{	
		this.sprite.setVelocityX(15)
		if (this.cursors.right.isDown)
		{
			this.stateMachine.setState('trampaHit')
		}

		if (this.cursors.up.isDown)
		{
			this.stateMachine.setState('jump')
		}
	}

		//CORRIDA
  /* private walkOnEnter()
	{
		this.sprite.play('yaguarete-walk')
	}

  private walkOnUpdate()
	{
    const speed = 50
		if (this.cursors.right.isDown)
		{
			this.sprite.setVelocityX(speed)
		}
		else
		{
			this.sprite.setVelocityX(0)
			this.stateMachine.setState('idle')
		}
		
		if (this.cursors.up.isDown)
		{
			this.stateMachine.setState('jump')
		}
	}

  private walkOnExit()
	{
		this.sprite.stop()
	} */

		//SALTO
  private jumpOnEnter()
	{		
		this.sprite.stop()
		this.sprite.play('yaguarete-jump')
		this.sprite.setVelocityY(-40)
		//this.sprite.setVelocityX(18)
	}

  private jumpOnUpdate()
	{
		
	}

	private jumpOnExit()
	{
		this.sprite.stop()
	}	
/* 
  private deadOnEnter()
	{
		this.sprite.play('yaguarete-death')

		this.sprite.setOnCollide(() => {})

		this.scene.time.delayedCall(1500, () => {
			this.scene.scene.start('game-over')
		})
	} */

	private trampaHitOnEnter(){
		console.log('muerto')
		this.sprite.play('yaguarete-death')		
		
		this.scene.time.delayedCall(1500, () => {
			this.scene.scene.launch('gameOver')
			this.scene.scene.pause()
			this.scene.scene.stop('ui')
			
		})
	}

	private banderaCollected(){
		console.log('GANASTEEE')		
		this.scene.scene.launch('gameWin')
		this.scene.scene.pause()
		this.scene.scene.stop('ui')
	}
  
	//  									ANIMACIONES 	
	
  private createAnimations()
	{
		this.sprite.anims.create({
			key: 'yaguarete-idle',
			frames: [{ key: 'yaguarete', frame: 'yaguarete_Nro01.png' }]
		})

		this.sprite.anims.create({
			key: 'yaguarete-walk',
			frameRate: 5,
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 1,
				end: 6,
				prefix: 'yaguarete_Nro0',
				suffix: '.png'
			}),
			repeat: -1
		})

    this.sprite.anims.create({
			key: 'yaguarete-jump',
			frameRate: 10,
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 1,
				end: 4,
				prefix: 'yaguareteSalto0',
				suffix: '.png'
			}),
			repeat: -1
		})

		this.sprite.anims.create({
			key: 'yaguarete-death',
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 1,
				end: 3,
				prefix: 'yaguareteMuerte0',
				suffix: '.png'
			}),
			frameRate: 4
		})
	}
}