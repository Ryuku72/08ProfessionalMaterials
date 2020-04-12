$(document).ready(function(){

$("#project").click(function(){
  $("#section").removeClass("hide");
  $('html,body').animate({
    scrollTop: $("#week1").offset().top},
    'slow');
})

$("#home").click(function(){
  $("#section").addClass("hide");
})

$("#contact").click(function(){
  $(".popContainer").addClass("active");
  $("#overlay").addClass("active");
})
$("#popupClose").click(function(){
  $(".popContainer").removeClass("active");
  $("#overlay").removeClass("active");
})

$(".submitButton").click(function(){
  if ($(".popInput").val() == "") {
    alert ("Please provide more information or press the close button")
  } else {
  $(".popContainer").removeClass("active");
  $("#overlay").removeClass("active");
  }
})

});
