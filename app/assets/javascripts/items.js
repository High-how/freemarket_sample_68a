$(function(){
  $("ul.menu li").mouseenter(function(){
     $(this).siblings().find("ul").hide();
     $(this).children().slideDown("slow");
  });
  $('html').click(function() {
     $('ul.menu ul').slideUp(150);
  });
});