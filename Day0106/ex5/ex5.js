const img = document.querySelector(".test_Img");
const imgCss = window.getComputedStyle(img);

let nowImg = parseInt(imgCss.width);

console.log(nowImg);
let photo_save = "";

// $(".test_Img").mouseenter(function () {
//   photo_save = $(this).attr("src");
//   $(this).attr("src", "../../img0103/연예인사진 (2)/11.jpg");
// });

// $(".test_Img").mouseout(function () {
//   $(this).attr("src", photo_save);
// });

$(".img_Big_Btn").click(function () {
  nowImg += 10;
  img.style.width = `${nowImg}px`;
  // $("test_Img").attr("width", nowImg + 10);
});

$(".img_Small_Btn").click(function () {
  nowImg -= 10;
  img.style.width = `${nowImg}px`;
});

//제이쿼리에서 아웃라인 css 속성값을 가져오기.
