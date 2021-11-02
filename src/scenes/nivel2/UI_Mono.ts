import Phaser from "phaser"
import {sharedInstance as events} from '../eventCenter'
export default class UI_Mono extends Phaser.Scene
{	
  //Texto para corroborar
  private criasLabel!: Phaser.GameObjects.Text
  private comidaLabel!: Phaser.GameObjects.Text
  
	private criasCollected = 0
  private comidaCollected = 0
	

	//Totales del nivel
	private criasTotales = 3
	private comidaTotales = 0
	
	//Estrellas totales [0 a 3]
	private estrellasNivel1 = 0

	private pause = false

	constructor()
	{
		super({
			key: 'uiMono'
		})

	}

	init()
	{
		this.pause = false

		this.criasCollected = 0
    this.comidaCollected = 0

		this.criasTotales = 3
		this.comidaTotales = 0

	}

	create()
	{
		const botonPausa = this.add.image(100, 100, 'botonPausa');
		botonPausa.setInteractive()
		.on('pointerover', () => botonPausa.setScale(1.1))
    .on('pointerout', () => botonPausa.setScale(1))
    
		botonPausa.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.pause('nivelMono');
			this.scene.pause('uiMono');
			this.scene.launch('pauseMono');
		});

		events.on('crias-collected', this.handleCriasCollected, this)
    events.on('comida-collected', this.handleComidaCollected, this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('crias-collected', this.handleCriasCollected, this)
		})
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('comida-collected', this.handleComidaCollected, this)
		})

    //TEXTO PARA CORROBORAR
    this.criasLabel = this.add.text(950, 30, 'Crias: 0/3', {
			fontSize: '32px',
			color: 'black',			
      font: '40pt Helvetica neue black', 
		})
    
    this.comidaLabel = this.add.text(950, 80, 'Comida: 0/48', {
			fontSize: '32px',
			color: 'black',
      font: '40pt Helvetica neue black',
		})		
	}
	
	private handleCriasCollected()
	{
		++this.criasCollected
    this.criasLabel.text = `Crias: ` + this.criasCollected + '/3'
		
		if (this.criasCollected > 0) 
		{
			events.emit('sumaEstrella')
		}
	}

  private handleComidaCollected()
	{
		++this.comidaCollected
    this.comidaLabel.text = `Comida: ${this.comidaCollected}`+ '/48'
		
		if (this.comidaCollected > 0) 
		{			
			events.emit('sumaEstrella')
		}
	}
}