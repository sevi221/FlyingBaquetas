window.onload = function() {
  var game = new Game("canvas");
  window.requestAnimationFrame(game.draw.bind(game));
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
