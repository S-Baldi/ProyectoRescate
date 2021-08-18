var config = {
  type: Phaser.WEBGL,
  scale: {
    mode: Phaser.Scale.FIT,
    /* autoCenter: Phaser.Scale.CENTER_BOTH, */
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
  scene: [prec, mp1, sc1, sc2, h1, cr1, go1, gw1, go2, gw2]
};
var game = new Phaser.Game(config);