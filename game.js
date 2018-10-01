$(document).ready(function() {
  $(window).on('keyup', function(event) {
    if (event.keyCode === 68) {
    $("#player1_race td.active").next().addClass("active");
    $("#player1_race td.active").prev().removeClass("active");
    var positionOne = $("#player1_race td.active");
    $(positionOne).index(parseInt($(positionOne).index()) + 1)
    console.log($(positionOne).index());
  }
  if (event.keyCode === 76) {
    $("#player2_race td.active").next().addClass("active");
    $("#player2_race td.active").prev().removeClass("active");
    var positionTwo = $( "#player2_race td.active" );
    $(positionTwo).index(parseInt($(positionTwo).index()) + 1)
    console.log($(positionTwo).index());
  }
  if ($(positionOne).index() === 8) {
    alert ("u r hot shit, smizing luda! ur bag contains a couple a cans a whoop ass!")
     window.location.reload();
   }
  if ($(positionTwo).index() === 8) {
    alert ("contemplative luda - u win! tell me who's your weed man, how do u smoke so good?")
    window.location.reload();
   }
});
})
