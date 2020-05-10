$(document).on('turbolinks:load', function () {
  // メソッドの定義
  var methods = {
    email: function (value, element) { // メールアドレスの正規表現
      console.log(element)
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value);
    },
    password: function (value, element) { 
      console.log(element)
      return this.optional(element) || /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i.test(value);
    },
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
  }

  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  $("#new_user").validate({
    rules : {
      "user[nickname]": {
        required: true
      },
      "user[email]": {
        required: true,
        email: true
      },
      "user[password]": {
        required: true, 
        rangelength: [7, 128],
        password: true
      },
      "user[password_confirmation]": {
        required: true,
        password: true,
        equalTo: "#user_password"
      },
      "user[family_name]": {
        required: true,
        family_name: true
      },
      "user[first_name]": {
        required: true,
        family_name: true
      },
      "user[family_name_reading]": {
        required: true,
        family_name_reading: true
      },
      "user[first_name_reading]": {
        required: true,
        family_name_reading: true
      },
      "user[birth_year]": {
        required: true
      },
      "user[birth_month]": {
        required: true
      },
      "user[birth_day]": {
        required: true
      },
    },

    messages: {
      "user[nickname]": {
        required: "ニックネームを入力してください"
      },
      "user[email]": {
        required: "メールアドレスを入力してください",
        email: "フォーマットが不適切です"
      },
      
      "user[password]": {
        required: "パスワードを入力してください", 
        rangelength: "7文字以上128文字以下で入力してください",
        password: "英字と数字両方を含むパスワードを設定してください"
      },
      "user[password_confirmation]": {
        required: "パスワードを入力してください",
        password: "パスワードが正しくありません",
        equalTo: "パスワードが一致していません"
      },
      "user[family_name]": {
        required: "姓を入力してください",
        family_name: "全角で入力してください"
      },
      "user[first_name]": {
        required: "名を入力してください",
        family_name: "全角で入力してください"
      },
      "user[family_name_reading]": {
        required: "姓カナを入力してください",
        family_name_reading: "全角カタカナで入力してください"
      },
      "user[first_name_reading]": {
        required: "名カナを入力してください",
        family_name_reading: "全角カタカナで入力してください"
      },
      "user[birth_year]": {
        required: "西暦を選択してください"
      },
      "user[birth_month]": {
        required: "月を選択してください"
      },
      "user[birth_day]": {
        required: "日にちを入力してください"
      },
    },

    

    errorPlacement: function(error, element) {
      switch(element.attr('name')) {
        case "user[family_name]":
          error.insertAfter($('#error-family_name'));
          break;
        case "user[first_name]":
          error.insertAfter($('#error-first_name'));
          break;
        case "user[family_name_reading]":
          error.insertAfter($('#error-family_reading'));
          break;
        case "user[first_name_reading]":
          error.insertAfter($('#error-first_reading'));
          break;
        case "user[birth_year]":
          error.insertAfter($('#error-year'));
          break;
        case "user[birth_month]":
          error.insertAfter($('#error-month'));
          break;
        case "user[birth_day]":
          error.insertAfter($('#error-day'));
          break;
        default:
          error.insertAfter(element);
      }
    },

    

    errorClass: "invalid",
    errorElement: "p",
    validClass: "valid",
  })

  $("#user_nickname, #user_email, #user_password, #user_password_confirmation, #user_family_name, #user_first_name, #user_family_name_reading, #user_first_name_reading, #user_birth_year, #user_birth_month, #user_birth_day").blur(function () {
    $(this).valid();
  });

  $(function() {
      var password  = '#user_password_confirmation';
      var passcheck = '#check';
    
      changeInputtype(password, passcheck);
  });


  function changeInputtype(password, passcheck) {
      $(passcheck).change(function() {       
          if ($(this).prop('checked')) {
              $(password).attr('type','text');
          } else {
              $(password).attr('type','password');
          }
      });
  }

});
