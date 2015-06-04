CENTER_X = 393,
CENTER_Y = 295,
PLAYER_START_X = 345,
PLAYER_START_Y = 270
function Arena() {
  this.$ele = $('<div id="arena"></div>').appendTo($('body'))
  this.leftBound = 50;
  this.topBound = 35;
  this.bottomBound = 550;
  this.rightBound = 750;
}

Arena.prototype.isInBounds = function(ball){
  return !(ball.posX < this.leftBound || ball.posX > this.rightBound ||
    ball.posY < this.topBound || ball.posY > this.bottomBound);
}

Arena.prototype.reset = function(ball, player) {
  ball.posX = CENTER_X;
  ball.posY = CENTER_Y;
  player.posX = PLAYER_START_X;
  player.posY = PLAYER_START_Y;
  ball.setPos();
  player.setPos();
}
