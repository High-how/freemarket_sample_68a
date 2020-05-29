$(function(){
  $("ul.menu li").mouseenter(function(){
     $(this).siblings().find("ul").hide();
     $(this).children().slideDown("slow");
  });
  $('html').click(function() {
     $('ul.menu ul').slideUp(150);
  });
});

$(function(){
  $('#item_price').on('input', function(){
    var s = $('#item_price').val();
    var result = Math.round(s * 0.1)
    var profit = s - result
    $('.sell-container-right__price-fee__price').html(result)
    $('.sell-container-right__price-fee__price').prepend('¥')
    $('.sell-container-right__price-benefit__price').html(profit)
    $('.sell-container-right__price-benefit__price').prepend('¥')
    if(profit == '') {
    $('.sell-container-right__price-benefit__price').html('');
    $('.sell-container-right__price-fee__price').html('');
    }
  });
});