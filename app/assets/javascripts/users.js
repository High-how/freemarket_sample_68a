$(document).on('turbolinks:load', function() {
  let tabs = $(".mypage__main__right-content__container__tab__menu");

  function tabSwitch() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    const index = tabs.index(this);
    $(".mypage__main__right-content__container__lists__show").removeClass("look").eq(index).addClass("look")
  }
  tabs.click(tabSwitch)
});

$(document).on('turbolinks:load', function(){
  $(".mypage__main__left-content__nav__menu").hover(function(){
    $(this).css('background', '#eee');
    $(this).css('font-size', '+=0.0em');
    }, function() {
    $(this).css('background', '');
    $(this).css('font-size', '');
  });
}); 

$(function(){
  $(".mypage__main__left-content__price__menu").hover(function(){
    $(this).css('background', '#eee');
    $(this).css('font-size', '+=0.0em');
    }, function() {
    $(this).css('background', '');
    $(this).css('font-size', '');
  });
});

$(function(){
  $(".mypage__main__left-content__list__menu").hover(function(){
    $(this).css('background', '#eee');
    $(this).css('font-size', '+=0.0em');
    }, function() {
    $(this).css('background', '');
    $(this).css('font-size', '');
  });
}); 