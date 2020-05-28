$(document).on('turbolinks:load', function () {
  var methods = {
    name: function (value, element) { 
      console.log(element)
      return this.optional(element) || ~/^[^ -~｡-ﾟ]*$/i.test(value);
    },
    introduction: function (value, element) { 
      console.log(element)
      return this.optional(element) || ~/^[^ -~｡-ﾟ]*$/i.test(value);
    },
    price: function (value, element) { 
      return this.optional(element) || ~/^[^ \d{3,7}]*$/i.test(value);
    },
  }

  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  $(".sell-upload-form").validate({
    rules : {
      "item[images_attributes][0][src]": {
        required: true
      },
      "item[name]": {
        required: true
      },
      "item[introduction]": {
        required: true
      },
      "item[trading_status]": {
        required: true 
      },
      "item[postage_payer]": {
        required: true
      },
      "item[postage_type]": {
        required: true
      },
      "item[shipping_area]": {
        required: true
      },
      "item[shipping_date]": {
        required: true
      },
      "item[price]": {
        required: true
      },
    },

    messages: {
      "item[images_attributes][0][src]": {
        required: "選択してください"
      },
      "item[name]": {
        required: "入力してください"
      },
      "item[introduction]": {
        required: "入力してください"
      },
      
      "item[trading_status]": {
        required: "選択してください", 
      },
      "item[postage_payer]": {
        required: "選択してください"
      },
      "item[postage_type]": {
        required: "選択してください"
      },
      "item[shipping_area]": {
        required: "選択してください"
      },
      "item[shipping_date]": {
        required: "選択してください"
      },
      "item[price]": {
        required: "入力してください"
      },
    },

    

    errorPlacement: function(error, element) {
      switch(element.attr('name')) {
        case "image[src]":
          error.insertAfter($('#item_images_attributes_0_src'));
          break;
        case "item[name]":
          error.insertAfter($('#item_name'));
          break;
        case "item[introduction]":
          error.insertAfter($('#item_introduction'));
          break;
        case "item[trading_status]":
          error.insertAfter($('#item_trading_status'));
          break;
        case "item[postage_payer]":
          error.insertAfter($('#item_postage_payer'));
          break;
        case "item[postage_type]":
          error.insertAfter($('#item_postage_type'));
          break;
        case "item[shipping_area]":
          error.insertAfter($('#item_shipping_area'));
          break;
        case "item[shipping_date]":
          error.insertAfter($('#item_shipping_date'));
          break;
        case "item[price]":
          error.insertAfter($('#item_price'));
          break;
        default:
          error.insertAfter(element);
      }
    },

    

    errorClass: "invalid",
    errorElement: "p",
    validClass: "valid",
  })

  $("#item_images_attributes_0_src, #item_name, #item_introduction, #item_trading_status, #item_postage_payer, #item_postage_type, #item_shipping_area, #item_shipping_date, #item_price").blur(function () {
    $(this).valid();
  });

  // $(function() {
  //     var password  = '#item_password_confirmation';
  //     var passcheck = '#check';
    
  //     changeInputtype(password, passcheck);
  // });


  // function changeInputtype(password, passcheck) {
  //     $(passcheck).change(function() {       
  //         if ($(this).prop('checked')) {
  //             $(password).attr('type','text');
  //         } else {
  //             $(password).attr('type','password');
  //         }
  //     });
  // }
});
