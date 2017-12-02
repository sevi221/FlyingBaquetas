function Drummer (canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = this.canvas.width/2;
  this.y = this.canvas.height-this.canvas.height/2;
  this.scale = 0.15;
  this.speed = 10;

  this.xMove = 1;
  setInterval((function() {
    this.xMove = Math.random() > 0.5 ? 1 : -1;
  }).bind(this), 2000);
  // this.sprite = new Image();
  // this.sprite.src = //sprite;

}

Drummer.prototype.isReady = function () {
  return this.sprite.isReady;
};

Drummer.prototype.move = function () {

};

Drummer.prototype.shoot = function () {

};

Drummer.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, 50, 50);
  this.x += this.xMove;
   // this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
};
// crear random para moverse de izquerda a derecha y vuelta.
// Random de disparar
// Ir disparando cada vez más rápido
