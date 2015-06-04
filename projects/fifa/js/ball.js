function Ball(options) {
  this.posX = CENTER_X;
  this.posY = CENTER_Y;
  this.$ele = $('<div id="ball"></div>').appendTo($('#arena'));
  this.$ele.addClass('move')
  this.setPos();
  this.goalie = options.goalie;
  this.arena = options.arena;
}

Ball.prototype.setPos = function() {
  this.$ele.css('left', this.posX + 'px')
  this.$ele.css('top', this.posY + 'px')
}

Ball.prototype.move = function() {
  this.$ele.addClass('move')
  this.posX = this.player.posX + 48;
  this.posY = this.player.posY + 25;
  this.setPos();
}

Ball.prototype.shoot = function() {
  var checkGoalieTop = this.goalie.posY + 10
  var checkGoalieBottom = this.goalie.posY + 30
  var shotDistance = 730 - this.posX;
  this.posX += shotDistance;
  console.log("You are shooting " + shotDistance + " to the right!")
  this.setPos();
  if (this.posY < 265 || this.posY > 325) {
    this.miss();
  } else if (this.posY > checkGoalieTop && this.posY < checkGoalieBottom) {
    this.saved();
  } else {
    this.score();
  }
};

Ball.prototype.miss = function() {
  this.punt();
  this.player.reset();
  console.log("You missed, but you get your ball back. Keep playing!")
}

Ball.prototype.saved = function() {
  this.goalie.slowGrow();
  this.punt();
  this.player.reset();
  console.log("The goalie saved your shot, but you get your ball back. Keep playing!")

}

Ball.prototype.score = function(player) {
  this.posX += 20;
  this.setPos();
  var $goal = $('<div id="goal">GOAL!</div>').appendTo($('#arena'));
  $goal.css({ fontSize: 0 }).animate({
    fontSize: 45
    },{
    duration: 2000,
    easing: "swing",
    step: function(t, fx){
        var x =  t*10 + 5
        var y = 50 + Math.sin(t) * 7;
        $goal.css({"left": x + "px", "top": y + "px"})
    },
    complete: function() {
      var counter = 0
      function blinker(){
        $goal.toggle();
        counter +=1;
        if (counter===11){
          clearInterval(blink)
        }
      }
      var blink = setInterval(blinker, 300)
      this.arena.reset(this, this.player);
      this.goalie.moveRand();
    }.bind(this)
  })
   console.log("GOAL!")

}

Ball.prototype.punt = function() {
  setTimeout(function(){
    this.$ele.removeClass('move')
    this.$ele.css({ fontSize: 0 }).animate({
      fontSize: 45
      },{
      duration: 1000,
      easing: "swing",
      step: function(t, fx){
          this.posX -= (900 - this.player.posX) / 110
          this.posY -= Math.sin(t/9) * 9;
          this.setPos();
      }.bind(this)
    });
  }.bind(this), 700)
}

Ball.prototype.isInBounds = function() {
  return this.arena.isInBounds(this);
}