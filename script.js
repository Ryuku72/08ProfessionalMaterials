$(document).ready(function(){

// var slideIndex = 0;
// var abort = false;
// carousel();

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusSlides(n) {
//   showDivs(slideIndex += n);
// }

// function carousel() {
//   if (abort) {
//     return;
//   } else {
//   var i;
//   var x = $(".mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 5 seconds

// }
// }

$("#project").click(function(){
  $("#section").removeClass("hide");
  $('html,body').animate({
    scrollTop: $(".week1").offset().top},
    'slow');
})

$("#media").click(function(){
  $("#section").addClass("hide");
})

});
