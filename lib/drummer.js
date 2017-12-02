function Drummer (canvas, image) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 300;
  this.y = 200;
  this.scale = 0.15;
  this.speed = 10;

  this.xMove = 1;
  setInterval((function() {
    this.xMove = Math.random() > 0.5 ? 1 : -1;
  }).bind(this), 2000);

  this.img = new Image();
  this.img.src = image;
  this.img.isReady = false;
  this.img.onload = (function(){
    this.img.isReady = true;
  }).bind(this);
  console.log(this.img);

}

Drummer.prototype.isReady = function () {
  return this.sprite.isReady;
};

Drummer.prototype.move = function () {

};

Drummer.prototype.shoot = function () {

};

Drummer.prototype.draw = function() {
  if(this.img.isReady){

    this.ctx.drawImage(this.img, this.x, this.y, this.img.width*0.5, this.img.height *0.5);
  }

  if (this.x < 100 || this.x > 600){
    this.xMove *= -1;
  }
  this.x += this.xMove;
   // this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
};
// crear random para moverse de izquerda a derecha y vuelta.
// Random de disparar
// Ir disparando cada vez más rápido
