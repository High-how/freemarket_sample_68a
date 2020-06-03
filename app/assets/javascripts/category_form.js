$(document).on('turbolinks:load',function () {
  function buildSize() {
    var html = `<div class="size-content">
                <p class="margin-2rem">
                <label class="sell-label" for="size_サイズ">サイズ</label>
                <span class="form-box">必須</span>
                </p>
                <div>
                <div class="select-wrap size-box">
                <select class="select-wrap__select-box" name="item[size]" id="item_size"><option value>選択してください</option>
                <option value="XXS">XXS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="FREE SIZE">FREE SIZE</option></select>
                <i class="fas fa-angle-down"></i>
                </div>
                </div>
                </div>
                `
    return html;
  }

  function buildChild() {
    // 2つ目のセレクトボックスの外枠
    var html = `<div class="select-wrap child-box">
    <select class="select-wrap__select-box" id="children-form" name="item[child_id]"><option value="">選択してください</option>
    </select>
    <i class="fas fa-angle-down"></i>
    </div>`
    return html;
  }
  function buildChildOption(child) {
    // 2つ目のセレクトボックスの選択肢
    var childOption = `<option value="${child.id}">${child.name}</option>`
    return childOption;
  }
  function buildGrandChild() {
    // 3つ目のセレクトボックスの外枠
    var html = `<div class="select-wrap grandchild-box">
    <select class="select-wrap__select-box" id="grand-children-form" name="item[grandchild_id]"><option value="">選択してください</option>
    </select>
    <i class="fas fa-angle-down"></i>
    </div>`
    return html;
  }
  function buildGrandChildOption(grandchild) {
    // 3つ目のセレクトボックスの選択肢
    var GrandChildOption = `<option value="${grandchild.id}" id="${grandchild.isSize}" >${grandchild.name}</option>`
    return GrandChildOption;
  }
  $("#parent-form").on("change", function () {
    // 1つ目のセレクトボックスのidを取得してそのidをAjax通信でコントローラーへ送る
    var parentValue = document.getElementById("parent-form").value;
    $(".child-box").remove();
    $(".grandchild-box").remove();
    $(".size-content").remove();
    $('.hidden').css({
      'display': 'none'
    });
    $.ajax({
      url: '/items/category_search',
      type: "GET",
      data: {
        parent_id: parentValue
      },
      dataType: 'json'
    })
      .done(function (child) {
        var InsertHTML = '';
        $('#children-form-area').append(buildChild());
        child.forEach(function (child) {
          InsertHTML = buildChildOption(child);
          $('#children-form').append(InsertHTML);
        })
      })
      .fail(function () {
        console.log("失敗");
      });
  })
  $(document).on("change", "#children-form", function () {
    // 2つ目のセレクトボックスのidを取得してそのidをAjax通信でコントローラーへ送る
    var childrenValue = document.getElementById("children-form").value;
    $(".size-content").remove();
    $(".grandchild-box").remove();
    $('.hidden').css({
      'display': 'none'
    });
    $.ajax({
      url: '/items/category_search',
      type: "GET",
      data: {
        child_id: childrenValue
      },
      dataType: 'json'
    })
      .done(function (grandchild) {
        var InsertHTML = '';
        $('#grandchild-form-area').append(buildGrandChild());
        grandchild.forEach(function (grandchild) {
          InsertHTML = buildGrandChildOption(grandchild);
          $('#grand-children-form').append(InsertHTML);
        })
      })
      .fail(function () {
        console.log("失敗");
      });
  });
  $(document).on("change", "#grand-children-form", function () {
    $(".size-content").remove();
    var isSize = $("#grand-children-form option:selected").attr("id")
    // 3つ目のセレクトボックスの値が変わった時、サイズの入力ボックスを表示させる
    if (isSize == "true") {
      $(".category-area").after(buildSize())
    };
  });
});
