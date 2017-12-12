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
  this.player = new Player(this.canvas, this.ctx, './images/jorge.png');
  this.baquetas = [];
  this.newBaqueta();

  document.onkeydown = this.player.onKeyDown.bind(this);
  document.onkeyup = this.player.onKeyUp.bind(this);
}

Game.prototype.newBaqueta = function() {
  var baqueta = new Baquetas(this.canvas,'./images/baqueta.png');
  baqueta.x = this.drummer.x;
  baqueta.y = this.drummer.y;
  this.baquetas.push(baqueta);

};

Game.prototype.collide = function() {
  return this.player.collide(this.baquetas);
};

Game.prototype.drawMessage = function(x, y, message) {
  this.ctx.font = "60px 'Press Start 2P'";
  this.ctx.fillStyle = "#66ff33";
  this.ctx.fillText(message, x, y);
};

Game.prototype.draw = function() {
  if (!this.collide()) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
    this.drummer.draw();
    this.player.draw();
    this.baquetas.forEach(function(baqueta){
      baqueta.draw();
    });
    this.drawId = window.requestAnimationFrame(this.draw.bind(this));
  } else {
    this.drawMessage(100, 400, "GAME OVER");
    window.cancelAnimationFrame(this.drawId);
  }
};
