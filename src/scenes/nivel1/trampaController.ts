import Phaser from 'phaser' 
import StateMachine from '../../statemachine/StateMachine'
import ObstaclesController from '../obstaclesController'

export default class trampaController
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

    this.createAnimationTramp()

    this.stateMachine = new StateMachine(this, 'trampa')

  this.stateMachine.addState('move',{
    onEnter: this.moveOnEnter,
  })
  .setState('move')
}

  update(dt: number)
	{
		this.stateMachine.update(dt)	
	}

  private moveOnEnter()
	{
		this.sprite.play('trampMove')		
	}

  private createAnimationTramp(){
    this.sprite.anims.create({
			key: 'trampMove',
			frameRate: 3,
			frames: this.sprite.anims.generateFrameNames('nivel1Trampaa', {
				start: 1,
				end: 2,
				prefix: 'trampa_Nro0',
				suffix: '.png'
			}),
			repeat: -1
		})
  }
}