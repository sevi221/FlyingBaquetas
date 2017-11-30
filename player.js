var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var UP_KEY = 38;
var DOWN_KEY = 40;

function Player() {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    /*this.sprite.hFrames = 3;
    this.sprite.vFrames = 1;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;*/

    this.width = this.sprite.fWidth * this.scale;
    this.height = this.sprite.fHeight * this.scale;
  }).bind(this);

  this.isFalling = false;

}

Player.prototype.isReady = function() {
  return this.sprite.isReady;
};

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == DOWN_KEY) {
    this.moveDown();
  }
};

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == UP_KEY) {
    this.moveUp();
  }
};

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == LEFT_KEY) {
    this.moveLeft();
  }
};

Player.prototype.onKeyUp = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.stop();
  }
};

Player.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.moveRight();
  }
};

Player.prototype.moveRight = function() {
  if (this.sprite.hfIndex >= 2) {
    this.sprite.hfIndex = 1;
  } else {
    this.sprite.hfIndex++;
  }

  this.x += this.speed;
};

Player.prototype.stop = function() {
  this.sprite.hfIndex = 0;
};
Player.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    if (collitions[0] instanceof Gap) {
      this.isFalling = true;
      this.fallOut();
      setInterval(this.fallOut.bind(this), 60);
    }
    return true;
  }
  return false;
};

Player.prototype.fallOut = function() {
  if (this.isFalling) {
    this.y += this.speed;
  }
};

Player.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();

    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.fWidth,
      this.sprite.vfIndex * this.sprite.fHeight,
      this.sprite.fWidth,
      this.sprite.fHeight,
      Math.min(this.x, this.canvas.width / 2),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
};


}
