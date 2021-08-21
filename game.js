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
      debug: true
    }
  },
  scene: [mp1, info, mapa, nivel_1]
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
