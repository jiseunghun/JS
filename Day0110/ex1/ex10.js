const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const imgMove = document.querySelector(".moveImg");
const imgStyle = window.getComputedStyle(imgMove);

let imgX = parseInt(imgStyle.top);
let imgY = parseInt(imgStyle.right);

const allEventHandler = {
  upClickFuntion: function () {
    imgY -= 10;
    imgMove.style.top = `${imgY}px`;
  },
  downClickFuntion: function () {
    imgY += 10;
    imgMove.style.top = `${imgY}px`;
  },
  rightClickFuntion: function () {
    imgX -= 10;
    imgMove.style.right = `${imgX}px`;
  },
  leftClickFuntion: function () {
    imgX += 10;
    imgMove.style.right = `${imgX}px`;
  },
};

console.log(imgX);

upBtn.onclick = allEventHandler.upClickFuntion;
downBtn.onclick = allEventHandler.downClickFuntion;
rightBtn.onclick = allEventHandler.rightClickFuntion;
leftBtn.onclick = allEventHandler.leftClickFuntion;
