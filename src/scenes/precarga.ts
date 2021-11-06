import Phaser from 'phaser'
import { EN_US, ES_AR, PT_BR } from '~/enums/languages'
import { FETCHED, FETCHING, READY, TODO } from '~/enums/status'
import { getTranslations, getPhrase } from '~/services/translation'

export default class precarga extends Phaser.Scene{
    private textSpanish
    private textEnglish
    private textPortuguese

    private updatedTextInScene
    private updatedString = 'JUGAR'
    private wasChangedLanguage = TODO

    constructor () {
      super('precarga');
    }

    create() {
    const { width, height } = this.scale

		const buttonSpanish = this.add.rectangle(width * 0.1, height * 0.15, 150, 75, 0xffffff)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(ES_AR)
			})

		this.textSpanish = this.add.text(buttonSpanish.x, buttonSpanish.y, 'Español', {
			color: '#000000'
		})
		.setOrigin(0.5)

    const buttonEnglish = this.add.rectangle(width * 0.5, height * 0.15, 150, 75, 0xffffff)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(EN_US)
			})

		this.textEnglish = this.add.text(buttonEnglish.x, buttonEnglish.y, 'Inglés', {
			color: '#000000'
		})
		.setOrigin(0.5)

    const buttonPortuguese = this.add.rectangle(width * 0.7, height * 0.15, 150, 75, 0xffffff)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(PT_BR)
			})

		this.textPortuguese = this.add.text(buttonPortuguese.x, buttonPortuguese.y, 'Portugués', {
			color: '#000000'
		})
		.setOrigin(0.5)

    const buttonUpdate = this.add.rectangle(width * 0.5, height * 0.75, 150, 75, 0x44d27e)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.scene.start('menuPpal')
			})

    this.updatedTextInScene = this.add.text(buttonUpdate.x,buttonUpdate.y, getPhrase(this.updatedString), {
			color: '#000000'
		})
		.setOrigin(0.5)
    }

    update(){
        // console.log(this.updatedTextInScene)
        if(this.wasChangedLanguage === FETCHED){
            this.wasChangedLanguage = READY;
            this.updatedTextInScene.setText(getPhrase(this.updatedString));
        }
    }

    async getTranslations(language){
        this.wasChangedLanguage = FETCHING
        await getTranslations(language)
        this.wasChangedLanguage = FETCHED
        // si solo se tiene un menu para elegir las opciones de idiomas conviene cargar aca la misma
        // this.scene.start('play')
    }

}