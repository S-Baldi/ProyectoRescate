import Phaser, { GameObjects } from 'phaser' 
import StateMachine from '../../statemachine/StateMachine'

export default class cazadorController
{
  private sprite: Phaser.Physics.Matter.Sprite
  private stateMachine: StateMachine
  private velocidadCazador = 15
  constructor(sprite: Phaser.Physics.Matter.Sprite) 
  {
  this.sprite = sprite
  this.createAnimationHunter()
  this.stateMachine = new StateMachine(this, 'cazador')
  this.stateMachine.addState('run',{
  onEnter: this.runOnEnter,
  onUpdate: this.runOnUpdate
  })
  .setState('run')  
  }
  update(dt: number)
	{
		this.stateMachine.update(dt)
    if (this.sprite.body.velocity.x < this.velocidadCazador)
    {
      this.sprite.setVelocityX(this.velocidadCazador)
    }
    
		console.log("Velocidad cazador" + this.velocidadCazador)
	}
  private runOnEnter()
	{
		this.sprite.play('hunter-run')		
	}
  private runOnUpdate(){
    this.sprite.setVelocityX(this.velocidadCazador)
  }
  private createAnimationHunter(){
    this.sprite.anims.create({
			key: 'hunter-run',
			frameRate: 10,
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