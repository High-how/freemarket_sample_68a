$(document).on('turbolinks:load',function() {
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();

  for (var i = year; i >= 1900 ; i--) {
      $('#user_birth_year').append('<option value="' + i + '">' + i + '</option>');
  }

  for (var j = 1; j <= 12; j++) {
      $('#user_birth_month').append('<option value="' + j + '">' + j + '</option>');
  }

  for (var k = 1; k <= 31; k++) {
      $('#user_birth_day').append('<option value="' + k + '">' + k + '</option>');
  }

  $('#user_birth_year').change(function() {
      selected_year = $('#user_birth_year').val();

      var last_month = 12;
      if (selected_year == year) {
          last_month = month;
      }
      $('#user_birth_month').children('option').remove();
      $('#user_birth_month').append('<option value="' + 0 + '">--</option>');
      for (var n = 1; n <= last_month; n++) {
          $('#user_birth_month').append('<option value="' + n + '">' + n + '</option>');
      }
  });

  $('#user_birth_year,#user_birth_month').change(function() {
      selected_year = $('#user_birth_year').val();
      selected_month = $('#user_birth_month').val();

      if (selected_year == year && selected_month == month ) {
          var last_date = date;
      }else{
          if (selected_month == 2) {
              if((Math.floor(selected_year%4 == 0)) && (Math.floor(selected_year%100 != 0)) || (Math.floor(selected_year%400 == 0))){
                  last_date = 29;
              }else{
                  last_date = 28;
              }

          }else if(selected_month == 4 || selected_month == 6 || selected_month == 9 || selected_month == 11 ){
              last_date = 30;
          }else{
              last_date = 31;
          }
      }

      $('#user_birth_day').children('option').remove();
      $('#user_birth_day').append('<option value="' + 0 + '">--</option>');
      for (var m = 1; m <= last_date; m++) {
          $('#user_birth_day').append('<option value="' + m + '">' + m + '</option>');
      }
  });

});