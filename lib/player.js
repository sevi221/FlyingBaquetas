var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var UP_KEY = 38;
var DOWN_KEY = 40;

function Player(canvas, ctx, image) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = canvas.width / 2;
  this.y = 450;
  this.speed = 50;

  this.img = new Image();
  this.img.src = image;

  this.img.isReady = false;
  this.img.onload = (function() {
    this.img.isReady = true;
  }).bind(this);
  console.log(this.img);
}

Player.prototype.isReady = function() {
  return this.sprite.isReady;
};

Player.prototype.draw = function() {
  if (this.img.isReady) {
    this.ctx.drawImage(this.img, this.x, this.y, this.img.width * 0.4, this.img.height * 0.4);
  }
};

Player.prototype.onKeyUp = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.player.stop();
  }
};

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.player.moveRight();
  }
  if (event.keyCode == LEFT_KEY) {
    this.player.moveLeft();
  }
  if (event.keyCode == UP_KEY) {
    this.player.moveUp();
  }
  if (event.keyCode == DOWN_KEY) {
    this.player.moveDown();
  }
};

Player.prototype.moveRight = function() {
  this.x += this.speed;
};

Player.prototype.moveLeft = function(){
  this.x -= this.speed;
};

Player.prototype.moveUp = function(){
  this.y -= this.speed;
};

Player.prototype.moveDown = function(){
  this.y += this.speed;
};

Player.prototype.stop = function() {
  this.player = this.x;
};


















// Player.prototype.collide = function(elements) {
//   collitions = elements.filter((function(e) {
//     return e.collide(this);
//   }).bind(this));
//
//   if (collitions.length > 0) {
//     if (collitions[0] instanceof Gap) {
//       this.isFalling = true;
//       this.fallOut();
//       setInterval(this.fallOut.bind(this), 60);
//     }
//     return true;
//   }
//   return false;
// };

// moverse de izquierda a derecha
// recibir disparos
// recoger gominolas que le dan vida
// imprimir puntos
