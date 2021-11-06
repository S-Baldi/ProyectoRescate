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
    preload()
    {  
      
      //////////// Todo del menu principal    
      this.load.image('menu', 'assets/MenuPrincipal/menuPpal.png');
      this.load.image('botonPlay', 'assets/MenuPrincipal/Botones/botonPlay.png');
      this.load.image('botonDesbloqueable', 'assets/MenuPrincipal/Botones/botonDesbloqueable.png');
      this.load.image('botonInfo', 'assets/MenuPrincipal/Botones/botonInfo.png');
      this.load.image('botonMusica', 'assets/MenuPrincipal/Botones/botonSonido.png');
      this.load.image('botonReset', 'assets/MenuPrincipal/Botones/botonReset.png');
      this.load.image('botonMapa', 'assets/MenuPrincipal/Botones/botonMapa.png');    
      this.load.image('botonatras', 'assets/MenuPrincipal/Botones/botonAtras.png');
      this.load.image('botonPausa', 'assets/MenuPrincipal/Botones/botonPausa.png');
      this.load.image('botonIdiomaEspañol', 'assets/MenuPrincipal/bandera.png');
      this.load.image('mapaArgentina', 'assets/Mapa/mapa.png');
      this.load.image('botonMenuPpal', 'assets/MenuPrincipal/Botones/botonMenu.png');
      //Menu Limpio
      this.load.image('fondoLimpio', 'assets/MenuPrincipal/fondoLimpio.png')
              //Menu Informacion
      this.load.image('menuInfo', 'assets/MenuPrincipal/MenuInformacion.png');
             //Menu ayuda
      this.load.image('menuAyuda','assets/MenuPrincipal/MenuAyuda.png');
              //Menu creditos
      this.load.image('menuCreditos','assets/MenuPrincipal/MenuCreditos.png');
             //Botones de desbloqueables
      this.load.image('botonYaguarete', 'assets/MenuPrincipal/Botones/Extras/1erDesbloqueable.png');
      this.load.image('botonMono', 'assets/MenuPrincipal/Botones/Extras/2doDesbloqueable.png');
      this.load.image('botonCondor', 'assets/MenuPrincipal/Botones/Extras/3erDesbloqueable.png');
      this.load.image('botonBallena', 'assets/MenuPrincipal/Botones/Extras/4toDesbloqueable.png');
      this.load.image('botonPinguino', 'assets/MenuPrincipal/Botones/Extras/5toDesbloqueable.png');
      this.load.image('infoYaguarete', 'assets/MenuPrincipal/Botones/Extras/infoYaguarete1.png');
      this.load.image('infoMono', 'assets/MenuPrincipal/Botones/Extras/infoMono1.png');
      this.load.image('infoCondor', 'assets/MenuPrincipal/Botones/Extras/infoCondor1.png');
      this.load.image('infoBallena', 'assets/MenuPrincipal/Botones/Extras/infoBallena1.png');
      this.load.image('infoPinguino', 'assets/MenuPrincipal/Botones/Extras/infoPinguino1.png');
      ///////////////////////////////////////////////////MUSICA DE NIVELES
      ///////////Musica Yaguarete
      this.load.audio('musicaYaguarete1', 'audio/boton.mp3')
      ///////////Musica Mono
      this.load.audio('musicaMono1', 'audio/boton.mp3')
      ///////////Menu Principal    
      this.load.audio('musicaMP4', 'audio/boton.mp3');
      //////////// Botones sonido
      this.load.audio('sonidoBoton', 'audio/boton.mp3') 
    }
    create() 
    {
      const { width, height } = this.scale

		  const buttonSpanish = this.add.rectangle(width * 0.1, height * 0.15, 150, 75, 0xffffff)
			  .setInteractive()
			  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => 
        {
				  this.getTranslations(ES_AR)
			  })

		  this.textSpanish = this.add.text(buttonSpanish.x, buttonSpanish.y, 'Español', 
      {
			  color: '#000000'
		  }).setOrigin(0.5)

      const buttonEnglish = this.add.rectangle(width * 0.5, height * 0.15, 150, 75, 0xffffff)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => 
      {
				this.getTranslations(EN_US)
			})

		  this.textEnglish = this.add.text(buttonEnglish.x, buttonEnglish.y, 'Inglés', 
      {
			  color: '#000000'
		  }).setOrigin(0.5)

      const buttonPortuguese = this.add.rectangle(width * 0.7, height * 0.15, 150, 75, 0xffffff)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () =>
      {
				this.getTranslations(PT_BR)
			})

		  this.textPortuguese = this.add.text(buttonPortuguese.x, buttonPortuguese.y, 'Portugués', 
      {
			  color: '#000000'
		  }).setOrigin(0.5)

    const buttonUpdate = this.add.rectangle(width * 0.5, height * 0.75, 150, 75, 0x44d27e)
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => 
      {
				this.scene.start('menuPpal')
			})

      this.updatedTextInScene = this.add.text(buttonUpdate.x,buttonUpdate.y, getPhrase(this.updatedString), 
      {
			  color: '#000000'
		  }).setOrigin(0.5)
    }

    update()
    {
      // console.log(this.updatedTextInScene)
      if(this.wasChangedLanguage === FETCHED)
      {
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