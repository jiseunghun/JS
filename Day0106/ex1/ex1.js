const img = document.querySelector(".test_Img");
const imgCss = window.getComputedStyle(img);
const smallSizeBtn = document.querySelector(".img_Small_Btn");
const bigSizeBtn = document.querySelector(".img_Big_Btn");

function imgSrcChange() {
  img.setAttribute("src", "../../img0103/mainImage/K-040.png");
}

function imgSrcChange2() {
  img.setAttribute("src", "../../img0103/mainImage/K-039.png");
}

img.addEventListener("mouseenter", imgSrcChange);
img.addEventListener("mouseleave", imgSrcChange2);

//classList.toggle("이름") 은 Class에 이름이 위치하면 삭제, 위치하지않으면 추가함.

//window.onload = function () {};
//인프리터 언어의 특징으로 스크립트의 위치에 따라서 문제가 발생하는 경우
//웹브라우저의 문서가 준비된 상황 이후에 발동하도록 한다.

let nowimg = parseInt(imgCss.width);

const resizeImgEvent = {
  samllImgfuntion: function () {
    console.log(nowimg);
    if (400 <= nowimg && nowimg <= 500) {
      //문법이 이상했음 and 나 or을 가지고 해야지만 문법이 통과됨
      nowimg -= 10;
      img.style.width = `${nowimg}px`;
    } else {
      nowimg += 10;
      img.style.width = `${nowimg}px`;

      alert("너무작습니다.");
    }
  },
  bigImgfuntion: function () {
    console.log(nowimg);
    if (nowimg <= 600) {
      nowimg += 10;
      img.style.width = `${nowimg}px`;
    } else {
      alert("너무큽니다.");
    }
  },
};

smallSizeBtn.onclick = resizeImgEvent.samllImgfuntion;
bigSizeBtn.onclick = resizeImgEvent.bigImgfuntion;
