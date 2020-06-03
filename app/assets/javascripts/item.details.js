$(document).on('turbolinks:load',function(){
$('.exhibition-item__main-content__item-photos__other-photos img').mouseover(function(){
var $thisImg = $(this).attr('src');
var $thisAlt = $(this).attr('alt');
$('.exhibition-item__main-content__item-photos__choice-photo img').attr({src:$thisImg,alt:$thisAlt});
});
});