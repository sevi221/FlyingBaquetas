window.onload = function() {
  // 1. Mandar pintar el game.js (que es tu fondo)
  var game = new Game("canvas");
  window.requestAnimationFrame(game.draw.bind(game));

  // 2. Mandar pintar el drummer.js (que es tu enemigo)

  // 3. Mandar pintar el player.js (que es tu player)
  // creo con el constructor, una instancia y la uso.
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      game.player.moveUp();
      console.log('up', player);
      break;
    case 40:
      game.player.moveDown();
      console.log('down', player);
      break;
    case 37:
      game.player.moveLeft();
      console.log('left', player);
      break;
    case 39:
      game.player.moveRight();
      console.log('right', player);
      break;
  }
}.bind(this.game);
