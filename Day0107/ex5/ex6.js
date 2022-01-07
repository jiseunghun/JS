let img2_x = 50,
  img2_y = 600,
  img3_x = 600,
  img3_y = 30;

$(".img2").css({
  left: img2_x,
  top: img2_y,
});

$(".img3").css({
  left: img3_x,
  top: img3_y,
});

$(".img1").hide();
setTimeout(function () {
  $(".img1").show();
}, 3000);

const allEventHandler = {
  img2_Move: function () {
    img2_x += 10;
    $(".img2").css({
      left: img2_x,
    });
    if (img2_x >= 700) {
      img2_x = 30;
    }
  },
  img3_Move: function () {
    img3_y += 10;
    $(".img3").css({
      top: img3_y,
    });
    if (img3_y >= 500) {
      img3_y = 30;
    }
  },
};

setInterval(allEventHandler.img2_Move, 100);
setInterval(allEventHandler.img3_Move, 100);
