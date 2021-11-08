import Phaser from 'phaser'
import { EN_US, ES_AR, PT_BR } from '~/enums/languages'
import { FETCHED, FETCHING, READY, TODO } from '~/enums/status'
import { getTranslations, getPhrase } from '~/services/translation'
import WebFontFile from './webFontLoader'

export default class precarga extends Phaser.Scene{
    private updatedText
    private updatedString = 'JUGAR'
    private wasChangedLanguage = TODO
    private fuenteTexto = 
    {
        fontFamily: 'Titan One',
        fontSize: '60pt',
        color: '#FFBD0D',
        stroke: '#00572f',
        strokeThickness: 6,  
    }

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
      this.load.image('fondoLimpio', 'assets/MenuPrincipal/fondoLimpio.png');
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
      //EXTRAS
      this.load.image('popUpExtras', 'assets/MenuPrincipal/popUp2.png');
      //PRECARGA
      this.load.image('banderaArg', 'assets/Precarga/Bandera_Arg.png');
      this.load.image('banderaBr', 'assets/Precarga/Bandera_Bra.png');
      this.load.image('banderaEu', 'assets/Precarga/Bandera_EU.png');
      ///////////////////////////////////////////////////MUSICA DE NIVELES
      ///////////Musica Yaguarete
      this.load.audio('musicaYaguarete1', 'audio/boton.mp3');
      ///////////Musica Mono
      this.load.audio('musicaMono1', 'audio/boton.mp3');
      ///////////Menu Principal    
      this.load.audio('musicaMP4', 'audio/boton.mp3');
      //////////// Botones sonido
      this.load.audio('sonidoBoton', 'audio/boton.mp3');

      this.load.addFile(new WebFontFile(this.load, [
        'Titan One',
        'Viga'
      ])) 
    }
    create() 
    {
      this.add.image(683, 384, 'fondoLimpio').setScale(0.72);

      const banderaArg = this.add.image(300, 300, 'banderaArg')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => 
      {
        this.getTranslations(ES_AR)
      })
      .on('pointerover', () => banderaArg.setScale(1.1))
      .on('pointerout', () => banderaArg.setScale(1))
      .on('pointerdown', () => banderaArg.setScale(0.9))

      const banderaEu = this.add.image(700, 300, 'banderaEu')
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => 
      {
				this.getTranslations(EN_US)
			})
      .on('pointerover', () => banderaEu.setScale(1.1))
      .on('pointerout', () => banderaEu.setScale(1))
      .on('pointerdown', () => banderaEu.setScale(0.9))

      const banderaBr = this.add.image(1100, 300, 'banderaBr')
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () =>
      {
				this.getTranslations(PT_BR)
			})
      .on('pointerover', () => banderaBr.setScale(1.1))
      .on('pointerout', () => banderaBr.setScale(1))
      .on('pointerdown', () => banderaBr.setScale(0.9))

      this.updatedText = this.add.text(560, 500, getPhrase('JUGAR'), this.fuenteTexto,)
      .setInteractive()
      this.updatedText.on('pointerdown', () => this.scene.start('menuPpal'))
      this.updatedText.on('pointerover', () => this.updatedText.setScale(1.1))
      this.updatedText.on('pointerout', () => this.updatedText.setScale(1))
    }

    update()
    {
      if(this.wasChangedLanguage === FETCHED)
      {
        this.wasChangedLanguage = READY;
        this.updatedText.setText(getPhrase(this.updatedString));
      }      
    }

    async getTranslations(language){
        this.wasChangedLanguage = FETCHING
        await getTranslations(language)
        this.wasChangedLanguage = FETCHED
    }

}  