function Player(options) {
  this.posX = PLAYER_START_X;
  this.posY = PLAYER_START_Y;
  this.scored = false;
  this.$ele = $('<div class="player"></div>').appendTo($('#arena'));
  this.ball = options.ball;
  this.ball.player = this;
  this.arena = options.arena;
  this.setPos();
}

Player.prototype.setDir = function(dir) {
  this.dir = dir;
  this.move(dir)
}

Player.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Player.prototype.move = function(dir) {
  var oldX = this.posX
  var oldY = this.posY
  switch(dir) {
    case 'right':
      this.posX +=10;
      break;
    case 'left':
      this.posX -=10;
      break;
    case 'up':
      this.posY -=10;
      break;
    case 'down':
      this.posY +=10;
      break;
  }
  if (!this.ball.isInBounds()){
      this.posX = oldX;
      this.posY = oldY;
  }
  if (dir != 'space'){
    this.setPos();
    this.ball.move(this);
  } else {
    this.ball.shoot(this);
    this.flashGrow();
  }
};

Player.prototype.flashGrow = function() {
  this.$ele.css('background-image', 'url("fifa/img/player_large.gif")');
  this.$ele.css({'width': '65px', 'height': '65px'});
  this.$ele.hide().fadeIn("fast");
  var that = this
  setTimeout(function(){
    that.$ele.css('background-image', 'url("fifa/img/player.gif")');
    that.$ele.css({'width': '48px', 'height': '48px'});
   }, 100);
}

Player.prototype.reset = function() {
setTimeout(function() {
  this.posX = this.ball.posX - 48;
  this.posY = this.ball.posY - 25
  this.setPos();
    }.bind(this), 1700);
}