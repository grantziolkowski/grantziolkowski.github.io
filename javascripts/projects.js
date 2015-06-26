$(document).ready(function(){
  $("#my_pill_pal").hover(function(){
     $(event.target).css({
      "opacity" : "0.7"
      })
    $(".summary").css({
      "opacity": "1",
       "-webkit-transform": "rotate(360deg)",
      "transform": "rotate(360deg)"})
  }, function(){
      $(event.target).css({
      "opacity" : "1"
      })
    $(".summary").css({
      "opacity": "0",
       "-webkit-transform": "none",
      "transform": "none"
    })
  })
})