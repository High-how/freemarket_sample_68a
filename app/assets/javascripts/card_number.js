$(document).on('turbolinks:load',function(){

  function insertStr(input){
    return input.slice(0, 4) + '-' + input.slice(4,input.length);
  }

  $("#card_numder").on('keyup',function(e){
    console.log ("test")
    var input = $(this).val();

    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){
      return false;
    }

    if(input.length === 4){
      $(this).val(insertStr(input));
    }
  });

  $("#card_number").on('blur',function(e){
    var input = $(this).val();

    if(input.length >= 4 && input.substr(4,1) !== '-'){
      $(this).val(insertStr(input));
    }
  });
})