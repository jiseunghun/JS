let img_box = "";

$(".small").click(function () {
  img_box = $(this).attr("src");
  //   alert(img_box);
  $(".imgBox").attr("src", img_box);

  $();
});
