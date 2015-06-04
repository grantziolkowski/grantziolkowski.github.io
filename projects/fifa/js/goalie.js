function Goalie(options) {
  this.posX = 710;
  this.posY = 270
  this.scored = false;
  this.$ele = $('<div class="goalie"></div>').appendTo($('#arena'));
  this.setPos();
}

Goalie.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Goalie.prototype.moveRand = function() {
  this.posY = 270 + Math.floor((Math.random()*40)) - 20
  this.setPos();
}

Goalie.prototype.slowGrow = function() {
  this.$ele.css('background-image', 'url("fifa/img/goalie_large.png")');
  this.$ele.css({'width': '70px', 'height': '73px'});
  this.$ele.hide().fadeIn("fast");
  var that = this
  setTimeout(function(){
    that.$ele.css('background-image', 'url("fifa/img/goalie.png")');
    that.$ele.css({'width': '46px', 'height': '48px'});
   }, 1000);
}