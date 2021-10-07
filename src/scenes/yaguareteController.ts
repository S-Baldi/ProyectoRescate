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
		.addState('walk', {
			onEnter: this.walkOnEnter,
			onUpdate: this.walkOnUpdate,
			onExit: this.walkOnExit
		})
		.addState('jump', {
			onEnter: this.jumpOnEnter,
			onUpdate: this.jumpOnUpdate,
			onExit: this.jumpOnExit
		})
		.addState('dead', {
			onEnter: this.deadOnEnter
		})
		.addState('trampaHit',{
			onEnter: this.trampaHitOnEnter
		})
		.setState('idle')

    this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => 
    {
      const body = data.bodyB as MatterJS.BodyType

			
			if (this.obstacles.is('trampa', body))
			{
				this.stateMachine.setState('trampaHit')
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
				case 'crias':
				{
					events.emit('crias-collected')
					sprite.destroy()
					break
				}

				case 'carne':
				{
					events.emit('comida-collected')
					sprite.destroy
					break
				}
			}
		})
  }
  update(dt: number)
	{
		this.stateMachine.update(dt)
	}

  /* private setHealth(value: number)
	{
		this.health = Phaser.Math.Clamp(value, 0, 100)

		events.emit('health-changed', this.health)

		// TODO: check for death
		if (this.health <= 0)
		{
			this.stateMachine.setState('dead')
		}
	} */

	//	IDLE

  private idleOnEnter()
	{
		this.sprite.play('yaguarete-idle')
	}

  private idleOnUpdate()
	{
		if (this.cursors.right.isDown)
		{
			this.stateMachine.setState('walk')
		}

		if (this.cursors.up.isDown)
		{
			this.stateMachine.setState('jump')
		}
	}

		//CORRIDA

  private walkOnEnter()
	{
		this.sprite.play('yaguarete-walk')
	}

  private walkOnUpdate()
	{
    const speed = 5
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
	}

		//SALTO
  private jumpOnEnter()
	{		
		this.sprite.play('yaguarete-jump')
	}

  private jumpOnUpdate()
	{
		if (this.cursors.up.isDown)
		{
			this.sprite.setVelocityY(-12)		
		}			
		else 
		{
			this.sprite.setVelocityY(0)
			this.stateMachine.setState('idle')
		}}

	private jumpOnExit()
	{
		this.sprite.stop()
	}	

  private deadOnEnter()
	{
		this.sprite.play('yaguarete-death')

		this.sprite.setOnCollide(() => {})

		this.scene.time.delayedCall(1500, () => {
			this.scene.scene.start('game-over')
		})
	}

	private trampaHitOnEnter(){
		console.log('muerto')
		this.sprite.play('yaguarete-death')
		
		this.scene.time.delayedCall(1500, () => {
			this.scene.scene.launch('gameOver')
		})
	}
  
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
			frameRate: 5,
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