import Phaser from 'phaser' 
import StateMachine from '../../statemachine/StateMachine'
import ObstaclesController from '../obstaclesController'
import { sharedInstance as events } from '../eventCenter'

export default class cazadorController
{
  private scene: Phaser.Scene
  private sprite: Phaser.Physics.Matter.Sprite
  private stateMachine: StateMachine
  private obstacles: ObstaclesController

  constructor(scene: Phaser.Scene, 
		sprite: Phaser.Physics.Matter.Sprite, 
    obstacles: ObstaclesController) 
  {
    this.scene = scene
    this.sprite = sprite
    this.obstacles = obstacles

    this.createAnimationHunter()

    this.stateMachine = new StateMachine(this, 'cazador')

  this.stateMachine.addState('run',{
    onEnter: this.runOnEnter,
    onUpdate: this.runOnUpdate
  })
  .addState('trampaHunter',{
    onEnter: this.trampaHunterOnEnter
  })
  .setState('run')

  this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
    const body = data.bodyA as MatterJS.BodyType
    
    if (this.obstacles.is('trampa', body))
    {
      this.stateMachine.setState('trampaHunter')
      return
    }

    const gameObject = body.gameObject
    
    if (!gameObject)
    {
      return
    }

    /* if (gameObject instanceof Phaser.Physics.Matter.TileBody)
    {
      if (this.stateMachine.isCurrentState('jump'))
      {
        this.stateMachine.setState('idle')
      }
      return
    } */
    
  
  })
}

  update(dt: number)
	{
		this.stateMachine.update(dt)	
	}

  private runOnEnter()
	{
		this.sprite.play('hunter-run')		
	}

  private runOnUpdate(){
    this.sprite.setVelocityX(15)
  }

  private trampaHunterOnEnter(){
    console.log('TRAMPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    this.sprite.destroy()
  }

  private createAnimationHunter(){
    this.sprite.anims.create({
			key: 'hunter-run',
			frameRate: 5,
			frames: this.sprite.anims.generateFrameNames('cazador', {
				start: 1,
				end: 5,
				prefix: 'cazador0',
				suffix: '.png'
			}),
			repeat: -1
		})
  }
}