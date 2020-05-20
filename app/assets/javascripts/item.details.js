$(function(){
  $("ul.menu li").mouseenter(function(){
     $(this).siblings().find("ul").hide();
     $(this).children().slideDown("slow");
  });
  $('html').click(function() {
     $('ul.menu ul').slideUp(150);
  });
});

// $・・・juaryの呼び出し
// function・・・関数（繰り返し処理の式みたいな）