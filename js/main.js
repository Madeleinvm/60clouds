$(document).on("ready",function(){
  $(".menu a").smoothscrolling();
  
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.scrollup').fadeIn();
  }
  else{
    $('.scrollup').fadeOut();
   }  
  
 });

});