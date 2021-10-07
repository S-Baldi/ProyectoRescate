import Phaser from "phaser"
import {sharedInstance as events} from './eventCenter'

export default class UI extends Phaser.Scene
{
  //Texto para corroborar
  private criasLabel!: Phaser.GameObjects.Text
  private comidaLabel!: Phaser.GameObjects.Text
  //FIN

	private criasCollected = 0
  private comidaCollected = 0

	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
		this.criasCollected = 0
    this.comidaCollected = 0
	}

	create()
	{
		events.on('crias-collected', this.handleCriasCollected, this)
    events.on('comida-collected', this.handleComidaCollected, this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('crias-collected', this.handleCriasCollected, this)
		})
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('comida-collected', this.handleComidaCollected, this)
		})

    //TEXTO PARA CORROBORAR
    this.criasLabel = this.add.text(500, 305, 'Crias: 0', {
			fontSize: '32px'
		})

    console.log(this.criasCollected)
    console.log(this.criasLabel) 
    
    this.comidaLabel = this.add.text(300, 325, 'Comida: 0', {
			fontSize: '32px'
		})
    console.log(this.comidaCollected)
    console.log(this.comidaLabel)
	}
	
	private handleCriasCollected()
	{
		++this.criasCollected
    this.criasLabel.text = `Crias: ${this.criasCollected}`
	}

  private handleComidaCollected()
	{
		++this.comidaCollected
    this.comidaLabel.text = `Comida: ${this.comidaCollected}`
    console.log('Funciona cmidaaaa')
	}

}