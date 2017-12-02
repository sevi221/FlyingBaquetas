function Drummer (canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

// Lo sitúo en el centro
  this.x = width/2;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = //sprite;

};

Drummer.prototype.isReady = function () {
  return this.sprite.isReady;
};

Drummer.prototype.move = function () {

}

Drummer.prototype.shoot = function () {

}
// crear random para moverse de izquerda a derecha y vuelta.
// Random de disparar
// Ir disparando cada vez más rápido
