import Phaser from 'phaser' 
import StateMachine from '../statemachine/StateMachine'
import { sharedInstance as events } from './EventCenter'
import ObstaclesController from './ObstaclesController'


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
			onUpdate: this.jumpOnUpdate
		})
		.addState('dead', {
			onEnter: this.deadOnEnter
		})
		.setState('idle')

    this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => 
    {
      const body = data.bodyB as MatterJS.BodyType
/* 
			if (this.obstacles.is('trampa', body))
			{
				this.stateMachine.setState('trampa-hit')
				return
			} */
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

  private setHealth(value: number)
	{
		this.health = Phaser.Math.Clamp(value, 0, 100)

		events.emit('health-changed', this.health)

		// TODO: check for death
		if (this.health <= 0)
		{
			this.stateMachine.setState('dead')
		}
	}

  private idleOnEnter()
	{
		this.sprite.play('player-idle')
	}

  private idleOnUpdate()
	{
		if (this.cursors.left.isDown || this.cursors.right.isDown)
		{
			this.stateMachine.setState('walk')
		}

		const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)
		if (spaceJustPressed)
		{
			this.stateMachine.setState('jump')
		}
	}

  private walkOnEnter()
	{
		this.sprite.play('player-walk')
	}

  private walkOnUpdate()
	{
    const speed = 5
    if (this.cursors.left.isDown)
		{
			this.sprite.flipX = true
			this.sprite.setVelocityX(speed)
		}
		else if (this.cursors.right.isDown)
		{
			this.sprite.flipX = false
			this.sprite.setVelocityX(speed)
		}
		else
		{
			this.sprite.setVelocityX(0)
			this.stateMachine.setState('idle')
		}

		const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)
		if (spaceJustPressed)
		{
			this.stateMachine.setState('jump')
		}
	}

  private walkOnExit()
	{
		this.sprite.stop()
	}

  private jumpOnEnter()
	{
		this.sprite.setVelocityY(-12)
	}

  private jumpOnUpdate()
	{
		const speed = 5

		this.sprite.setVelocityX(speed)		
	}

  private deadOnEnter()
	{
		this.sprite.play('player-death')

		this.sprite.setOnCollide(() => {})

		this.scene.time.delayedCall(1500, () => {
			this.scene.scene.start('game-over')
		})
	}
  
  private createAnimations()
	{
		this.sprite.anims.create({
			key: 'player-idle',
			frames: [{ key: 'yaguarete', frame: 'yaguarete_y_cria.png' }]
		})

		this.sprite.anims.create({
			key: 'player-walk',
			frameRate: 10,
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 1,
				end: 3,
				prefix: 'yaguarete_y_cria',
				suffix: '.png'
			}),
			repeat: -1
		})

    this.sprite.anims.create({
			key: 'player-jump',
			frameRate: 10,
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 4,
				end: 7,
				prefix: 'yaguarete_y_cria',
				suffix: '.png'
			}),
			repeat: -1
		})

		this.sprite.anims.create({
			key: 'player-death',
			frames: this.sprite.anims.generateFrameNames('yaguarete', {
				start: 8,
				end: 10,
				prefix: 'yaguarete_y_cria',
				zeroPad: 2,
				suffix: '.png'
			}),
			frameRate: 10
		})
	}
}