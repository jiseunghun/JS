// change를 이벤트를 사용해서 class box의 색을 변경하자

$(function () {
  const first_Color = $(".colorPicker").val();
  const second_Color_bg = $(".colorPicker").val();
  const origin_Font_Size = $(".select_Font_Size option:selected").val();

  $(".box").css({
    "font-size": `${origin_Font_Size}px`,
    "background-color": second_Color_bg,
    color: first_Color,
  });

  $(".colorPicker").change(function () {
    const changeColor = $(this).val();
    console.log(changeColor);
    // $("form").append(
    //   `<div class=box2 >YOU PICK THIS ${changeColor} Color</div>`
    // );
    // append,prepend : 요소의 내부에 뒤나 앞에 배치한다.
    // $("<div>YOU PICK THIS Color</div>").prependTo(".box");
    // $("<div>YOU PICK THIS Color</div>").appendTo(".box");
    // appendTo,prependTo : 선택한 요소 내부의 앞 또는 뒤에 배치한다.
    // $(".box").css("background-color", changeColor);
    $(".box").css({
      "background-color": changeColor,
      color: "pink",
    });
    // 다양한 요소를 한번에 주고싶은 경우는 ({})이런 형식으로 다양한 css 효과를 주거나 할 수 있다.
  });

  $(".select_Font_Size").change(function () {
    const font_Size_Pick = $(this).val();
    console.log(font_Size_Pick);
    $(".box").css("font-size", `${font_Size_Pick}px`);
  });

  $(".select_Font_Family").change(function () {
    const font_Family = $(this).val();
    console.log(font_Family);
    $(".box").css("font-family", font_Family);
  });
});
