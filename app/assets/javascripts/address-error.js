$(document).on('turbolinks:load', function () {
  var methods = {
    family_name: function (value, element) { 
      return this.optional(element) || ~/^[^ -~｡-ﾟ]*$/i.test(value);
    },
    first_name: function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
    family_name_reading: function (value, element) { 
      return this.optional(element) || /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/i.test(value);
    },
    first_name_reading: function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
    postal_code: function (value, element) { 
      return this.optional(element) || /^[0-9!-/:-@¥[-`{-~]*$/i.test(value);
    },
  }

  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  $("#form_address").validate({
    rules : {
      "address[family_name]": {
        required: true,
        family_name: true
      },
      "address[first_name]": {
        required: true,
        family_name: true
      },
      "address[family_name_reading]": {
        required: true,
        family_name_reading: true
      },
      "address[first_name_reading]": {
        required: true,
        family_name_reading: true
      },
      "address[postal_code]": {
        required: true,
        postal_code: true
      },
      "address[prefecture]": {
        required: true
      },
      "address[city]": {
        required: true
      },
      "address[address]": {
        required: true
      },
    },

    messages: {
      "address[family_name]": {
        required: "姓を入力してください",
        family_name: "全角で入力してください"
      },
      "address[first_name]": {
        required: "名を入力してください",
        family_name: "全角で入力してください"
      },
      "address[family_name_reading]": {
        required: "姓カナを入力してください",
        family_name_reading: "全角カタカナで入力してください"
      },
      "address[first_name_reading]": {
        required: "名カナを入力してください",
        family_name_reading: "全角カタカナで入力してください"
      },
      "address[postal_code]": {
        required: "入力してください",
        postal_code: "フォーマットが不適切です"
      },
      "address[prefecture]": {
        required: "入力してください"
      },
      "address[city]": {
        required: "入力してください"
      },
      "address[address]": {
        required: "入力してください"
      },
    },

    errorPlacement: function(error, element) {
      switch(element.attr('name')) {
        case "address[family_name]":
          error.insertAfter($('#error-family_name'));
          break;
        case "address[first_name]":
          error.insertAfter($('#error-first_name'));
          break;
        case "address[family_name_reading]":
          error.insertAfter($('#error-family_reading'));
          break;
        case "address[first_name_reading]":
          error.insertAfter($('#error-first_reading'));
          break;
        default:
          error.insertAfter(element);
      }
    },

    errorClass: "invalid",
    errorElement: "p",
    validClass: "valid",
  })

  $("#address_family_name, #address_first_name, #address_family_name_reading, #address_first_name_reading, #address_postal_code, #address_prefecture, #address_city, #address_address").blur(function () {
    $(this).valid();
  });
});