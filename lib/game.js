/*
 * ****************************************** *
 * Version 1.0 2017, (C)Laura Sevi            *
 * ****************************************** *
 */
function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');

  this.background = new Image();
  this.background.src = "./images/wallpaper.jpg";

  this.background.onload = function() {
    this.background.width = this.canvas.width;
    this.background.height = this.canvas.height;
  }.bind(this);

  this.drummer = new Drummer(this.canvas, './images/bateria.png');
  this.player = new Player(this.canvas, this.ctx, './images/guitar.jpg');
  this.baquetas = new Baquetas(this.canvas,'');

  document.onkeydown = this.player.onKeyDown.bind(this);
  document.onkeyup = this.player.onKeyUp.bind(this);
}



Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
  this.drummer.draw();
  this.player.draw();
  // this.baquetas.draw();



// Game.prototype.onKeyDown = function(event) {
//   if (!this.player.collide(this.elements)) {
//     if (event.keyCode == RIGHT_KEY && this.player.x >= this.canvas.width / 2) {
//       this.moveBgRight();
//     }
//     this.player.onKeyDown(event);
//   }
// };

  window.requestAnimationFrame(this.draw.bind(this));
};
