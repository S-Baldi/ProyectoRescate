import Phaser from "phaser"
import {sharedInstance as events} from '../eventCenter'

export default class UI_Pinguino extends Phaser.Scene
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

	constructor()
	{
		super({
			key: 'uiPinguino'
		})

	}

	init()
	{

		this.criasCollected = 0
    this.comidaCollected = 0

		this.criasTotales = 0
		this.comidaTotales = 0

		this.estrellasNivel1 = 0
	}

	create()
	{
		
		const botonPausa = this.add.image(100, 100, 'botonPausa');
		botonPausa.setInteractive()
		botonPausa.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.pause('nivelPinguino');
			this.scene.launch('pausePinguino');
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
    
    this.comidaLabel = this.add.text(950, 80, 'Comida: 0/47', {
			fontSize: '32px',
			color: 'black',
      font: '40pt Helvetica neue black',
		})
		
	}

	update()
	{
		if (this.criasCollected === this.criasTotales) 
		{
			this.sumarUnaEstrella
		}	
	}

  private sumarUnaEstrella(){		
		console.log('JUNTASTE TODAS LAS CRIAS :D')
		++this.estrellasNivel1
		console.log(this.estrellasNivel1)		
	}
	
	private handleCriasCollected()
	{
		++this.criasCollected
    this.criasLabel.text = `Crias: ` + this.criasCollected + '/3'
		
		/* if (this.criasCollected > 0) 
		{
			console.log('JUNTASTE CRIA')
			events.emit('sumaEstrella')
		} */
	}

  private handleComidaCollected()
	{
		++this.comidaCollected
    this.comidaLabel.text = `Comida: ${this.comidaCollected}`+ '/47'
		
		/* if (this.comidaCollected > 0) 
		{
			console.log('JUNTASTE COMIDA')
			events.emit('sumaEstrella')
		} */
	}
}