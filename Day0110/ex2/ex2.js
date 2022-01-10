const alertBox = document.querySelector(".alert");
const allBtn = document.querySelectorAll(".btn");
const img = document.querySelector("img");
const imgStyle = window.getComputedStyle(img);

console.log(imgStyle.top);

const originImgX = imgStyle.left;
const originImgY = imgStyle.top;

let imgX = parseInt(imgStyle.left);
let imgY = parseInt(imgStyle.top);

function show() {
  alertBox.innerHTML = `X : ${imgX} Y : ${imgY} `;
}

show();

const allEventHandler = {
  btnClick: function () {
    let num = this.getAttribute("num");
    switch (parseInt(num)) {
      case 1:
        imgY -= 10;
        img.style.top = `${imgY}px`;
        break;
      case 2:
        imgY += 10;
        img.style.top = `${imgY}px`;
        break;
      case 3:
        imgX += 10;
        img.style.left = `${imgX}px`;
        break;
      case 4:
        imgX -= 10;
        img.style.left = `${imgX}px`;
        break;
      case 5:
        imgX = parseInt(originImgX);
        imgY = parseInt(originImgY);
        img.style.left = `${imgX}px`;
        img.style.top = `${imgY}px`;
        break;
      default:
        break;
    }
    show();
  },
};

allBtn[0].onclick = allEventHandler.btnClick;
allBtn[1].onclick = allEventHandler.btnClick;
allBtn[2].onclick = allEventHandler.btnClick;
allBtn[3].onclick = allEventHandler.btnClick;
allBtn[4].onclick = allEventHandler.btnClick;
