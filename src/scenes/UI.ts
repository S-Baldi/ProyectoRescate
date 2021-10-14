import Phaser from "phaser"
import {sharedInstance as events} from './eventCenter'

export default class UI extends Phaser.Scene
{	
  //Texto para corroborar
  private criasLabel!: Phaser.GameObjects.Text
  private comidaLabel!: Phaser.GameObjects.Text
  
	private criasCollected = 0
  private comidaCollected = 0

	//Totales del nivel
	private criasTotales = 5
	private comidaTotales = 0
	
	//Estrellas totales [0 a 3]
	private estrellasNivel = 0

	private pause = false

	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
		this.pause = false

		this.criasCollected = 0
    this.comidaCollected = 0

		this.criasTotales = 5
		this.comidaTotales = 0
		console.log(this.criasTotales)

		this.estrellasNivel = 0
	}

	create()
	{
		const botonPausa = this.add.image(100, 100, 'botonPausa');
		botonPausa.setInteractive()
		botonPausa.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.scene.pause('nivelYaguarete');
			this.scene.launch('pause');
		});

		
		/* botonPausa.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			if(this.pause === false){
			this.scene.pause('nivelYaguarete')
			this.pause = true
			}
			else if (this.pause === true) {
			this.scene.resume('nivelYaguarete')
			this.pause = false
			}
		}); */


		events.on('crias-collected', this.handleCriasCollected, this)
    events.on('comida-collected', this.handleComidaCollected, this)
		/*events.on('bandera-collected', this.handleBanderaCollected, this */

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('crias-collected', this.handleCriasCollected, this)
		})
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('comida-collected', this.handleComidaCollected, this)
		})

    //TEXTO PARA CORROBORAR
    this.criasLabel = this.add.text(100, 505, 'Crias: 0', {
			fontSize: '32px'
		})
    
    this.comidaLabel = this.add.text(100, 555, 'Comida: 0', {
			fontSize: '32px'
		})
	}

	update(){
		if (this.criasCollected === this.criasTotales) {
			this.sumarUnaEstrella
		}	
	}

  private sumarUnaEstrella(){		
		console.log('JUNTASTE TODAS LAS CRIAS :D')
		++this.estrellasNivel
		console.log(this.estrellasNivel)
	}
	
	private handleCriasCollected()
	{
		++this.criasCollected
    this.criasLabel.text = `Crias: ` + this.criasCollected
	}

  private handleComidaCollected()
	{
		++this.comidaCollected
    this.comidaLabel.text = `Comida: ${this.comidaCollected}`
	}
}