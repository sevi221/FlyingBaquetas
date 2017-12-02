/*
 * ****************************************** *
 * Version 1.0 2017, (C)Laura Sevi            *
 * ****************************************** *
 */
 function Game (canvasId) {
   this.canvas = document.getElementById(canvasId);
   this.ctx = this.canvas.getContext('2d');

   this.background = new Image();
   this.background.src = "images/wallpaper.jpg";

   this.background.onload = function() {
     this.background.width = this.canvas.width;
     this.background.height = this.canvas.height;
   }.bind(this);

   this.drummer = new Drummer(this.canvas, '');
 }


Game.prototype.draw = function() {
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
   this.drummer.draw();
   window.requestAnimationFrame(this.draw.bind(this));
};
