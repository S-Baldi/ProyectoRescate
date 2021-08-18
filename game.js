var config = {
  type: Phaser.WEBGL,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1366,
    height: 768,
    },
  physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 350 },
        debug: true
      }
  },
  scene: [mp1, mapa]
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
