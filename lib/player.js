function Player() {

  this.x = width/2;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;
}

Player.prototype.show = function (){
    fill(red);
    rect(this.x, height-20, 50, 50);
};
Player.prototype.move = function (dir) {
    this.x += dir;
  };


// moverse de izquierda a derecha
// recibir disparos
// recoger gominolas que le dan vida
// imprimir puntos
