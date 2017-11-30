
function MaxMil (canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = //sprite;

}

Maxmil.prototype.isReady = function() {
  return this.sprite.isReady;
}

// crear random para moverse de izquerda a derecha y vuelta.
// Y random de disparar
// Ir disparando cada vez más rápido
//
