import { Body } from 'matter'
import Phaser, { LEFT } from 'phaser' 
import StateMachine from '../../statemachine/StateMachine'
import { sharedInstance as events } from '../eventCenter'
import ObstaclesController from '../obstaclesController'
import UI_Mono from '../nivel2/UI_Mono'

type CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys

export default class monoController
{
	private pointer: any //COLOCAMOS UN POINTER PARA EL MOUSE
  private scene: Phaser.Scene
	private sprite: Phaser.Physics.Matter.Sprite
	private cursors: CursorKeys

  private stateMachine: StateMachine
  private obstacles: ObstaclesController

	public cantEstrellas = 0
	private controlEstrellas?:UI_Mono

	private velocidadMono = 15
	

  constructor(scene: Phaser.Scene, 
		sprite: Phaser.Physics.Matter.Sprite, 
		cursors: CursorKeys, 
		obstacles: ObstaclesController) 
  {
		this.pointer = scene.input.activePointer; //LE COLOCAMOS AL POINTER UN ACTIVEPOINTER
    this.scene = scene
		this.sprite = sprite
		this.cursors = cursors
		this.obstacles = obstacles

    this.createAnimations()

		this.stateMachine = new StateMachine(this, 'mono')

		this.stateMachine.addState('walk', {
			onEnter: this.walkOnEnter,
			onUpdate: this.walkOnUpdate
		})
		.addState('jump', {
			onEnter: this.jumpOnEnter,
			onExit: this.jumpOnExit
		})
		.addState('sueloHit',{
			onEnter: this.sueloHitOnEnter
		})
		.addState('banderaCollected',{
			onEnter: this.banderaCollected
		})
		.setState('walk')

    this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
      const body = data.bodyB as MatterJS.BodyType
			
			if (this.obstacles.is('hitBoxSuelo', body))
			{
				this.stateMachine.setState('sueloHit')
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
				if (this.stateMachine.isCurrentState('jump'))
				{
					this.stateMachine.setState('walk')
				}
				return
			}
      
      const sprite = gameObject as Phaser.Physics.Matter.Sprite
			const type = sprite.getData('type')
      
      switch (type)
			{
				case 'bandera':
				{
					this.stateMachine.setState('banderaCollected')
					break
				}
				case 'cazador':
				{
					this.stateMachine.setState('sueloHit')
					console.log('CHOCASTE CON CAZADOR')
					break
				}

				case 'cria':
				{
					sprite.destroy()
					events.emit('crias-collected')
					break
				}	

				case 'banana':
				{
					events.emit('comida-collected')
					sprite.destroy()
					break
				}
			}
		})
		
		/* events.removeAllListeners();
		events.on('sumaEstrella', this.sumadorEstrellas, this)
		this.cantEstrellas = 0 */
  }
  update(dt: number)
	{
		this.stateMachine.update(dt)
		if (this.sprite.body.velocity.x <= this.velocidadMono && this.sprite.body.velocity.x > 1 ){
			this.sprite.setVelocityX(this.velocidadMono)
		}
		if (this.sprite.body.velocity.x == 0)
		{
			this.sprite.setVelocity(0)
		}
	}

/* 	sumadorEstrellas()
	{	
    this.cantEstrellas = this.cantEstrellas+1			
	} */

	//	WALK  
  private walkOnEnter()
	{
		this.sprite.play('mono-walk')	
	}

  private walkOnUpdate()
	{	
		this.sprite.setVelocityX(this.velocidadMono)
		if (this.cursors.up.isDown|| this.pointer.isDown) //POINTER IS DOWN INDICA SI SE REALIZA EL CLICK
		{
			this.stateMachine.setState('jump')
		}
	}

		//SALTO
  private jumpOnEnter()
	{		
		this.sprite.stop()
		this.sprite.play('mono-jump')
		this.sprite.setVelocityY(-40)
		//this.sprite.setVelocityX(18)
	}

	private jumpOnExit()
	{
		this.sprite.stop()
	}

	private sueloHitOnEnter(){
		this.sprite.play('mono-death')
		this.sprite.setVelocityX(0)		
		
		this.scene.time.delayedCall(1000, () => {
			this.scene.scene.launch('gameOverMono')
			this.scene.scene.pause()
			this.scene.scene.stop('uiMono')	
		})
	}

	private banderaCollected(){
		this.scene.scene.pause()
		this.scene.scene.stop('uiMono')
		this.scene.scene.launch('gameWinMono')	

		/* this.cantEstrellas = this.cantEstrellas+1
		this.scene.scene.get('popUpMapa').aumentaContador1()
		this.scene.scene.get('gameWin').aumentaContador1()
		this.scene.scene.get('pop_up_B').aumentaContador1() */
		
		/* let cat2 = localStorage.getItem('nivelPasado');
		if (cat2 < 1){
			localStorage.setItem('nivelPasado', '1');
		} */

	/* 	if (this.cantEstrellas == 2) 
		{			
			localStorage.setItem('estrellasYaguarete', '2');
		}
		else if (this.cantEstrellas == 3) 
		{			
			localStorage.setItem('estrellasYaguarete', '3');	
		} 
		else
		{
			localStorage.setItem('estrellasYaguarete', '1');
		} */
	}
  
	//  									ANIMACIONES 	
	
  private createAnimations()
	{
		this.sprite.anims.create({
			key: 'mono-walk',
			frameRate: 10,
			frames: this.sprite.anims.generateFrameNames('mono', {
				start: 1,
				end: 10,
				prefix: 'monoCamina0',
				suffix: '.png'
			}),
			repeat: -1
		})

    this.sprite.anims.create({
			key: 'mono-jump',
			frameRate: 10,
			frames: this.sprite.anims.generateFrameNames('mono', {
				start: 1,
				end: 5,
				prefix: 'monoSalto0',
				suffix: '.png'
			}),
			repeat: -1
		})

		this.sprite.anims.create({
			key: 'mono-death',
			frames: this.sprite.anims.generateFrameNames('mono', {
				start: 1,
				end: 3,
				prefix: 'monoMuerte0',
				suffix: '.png'
			}),
			frameRate: 3
		})
	}
}