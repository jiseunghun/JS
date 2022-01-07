let imgbox = "";

$("img").click(function () {
  imgbox = $(this).attr("src");
  $(".imgIn").attr("src", imgbox);
  console.log(imgbox);
});
