function Baquetas(canvas, image) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 300;
  this.y = 100;
  this.scale = 0.15;
  this.speed = 7;
  this.width = 0;
  this.height = 0;

  this.img = new Image();
  this.img.src = image;
  this.img.isReady = false;
  this.img.onload = (function() {
    this.img.isReady = true;
    this.width = this.img.width * this.scale;
    this.height = this.img.height * this.scale;
  }).bind(this);
}

Baquetas.prototype.collide = function(element) {
  return !(this.x + this.width < element.x ||
    element.x + element.width < this.x ||
    this.y + this.height < element.y ||
    element.y + element.height < this.y);
};
Baquetas.prototype.draw = function() {
  if (this.img.isReady) {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  this.y += this.speed;
  if (this.y > canvas.height){
    this.y = 0;
  }
};
