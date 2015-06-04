$(document).ready(function() {
  var arena = new Arena();
  var goalie = new Goalie();
  var ball = new Ball({goalie: goalie, arena: arena});
  var player = new Player({ball: ball, arena: arena});

  ['up','down','right','left','space'].forEach(function(dir){
    Mousetrap.bind(dir, function(){
      player.setDir(dir);
      goalie.moveRand();
    })
  })

})
