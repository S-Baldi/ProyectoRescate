var config = 
{
  type: Phaser.WEBGL,
  scale: 
  {
    mode: Phaser.Scale.FIT,
    width: 1366,
    height: 768,
  },
  physics: 
  {
    default: 'arcade',
    arcade:
    {
      gravity: { y: 350 },
      debug: false
    }
  },
  scene: [mp1, info, mapa, ayuda, creditos, nivel_1]
};

var game = new Phaser.Game(config);

var fondoMenu;
var buttonPlay;
var buttonInfo;
var buttonPremio;
var buttonMusica;
var banderaArg;

var mapaArg;
var buttonMenu;

var sonidoButton;

//Info
var fondoMenu;
var teclaAyuda;
var teclaCreditos;
var buttonAtras;

//Teclas
var cursors;
var teclaR;
var teclaP;
var teclaF;

//Nivel 1
var fondo_nivel1;
var yaguarete_nivel1;
var carne_nivel1;
var suelo_nivel1;
var puntaje_nivel1 = 0;
var texto_puntaje_nivel1;
