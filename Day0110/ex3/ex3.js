const img = document.querySelector(".imgMove");
const imgStyle = window.getComputedStyle(img);
const allBtn = document.querySelectorAll("button");

let runningX = 0;

console.log(runningX);

function startBtn() {
  moveimg = setInterval(() => {
    runningX += 20;
    img.style.left = `${runningX}px`;
  }, 200);
}

function stopBtn() {
  clearInterval(moveimg);
}

allBtn[0].onclick = startBtn;
allBtn[1].onclick = stopBtn;
