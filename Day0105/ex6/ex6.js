const btn = document.querySelectorAll(".buttonList_chain button");
const imgBring = document.querySelector("img");
const infobtn = document.querySelectorAll(".infoBox_btn button");
const infobox = document.querySelector(".infoBox_info");
const getStyle = window.getComputedStyle(imgBring);

const nameTest = [
  "hwangjeongeum",
  "jeonjeehyeon",
  "kangdongwon",
  "kimtaehee",
  "soojee",
  "youahin",
];

const allEventHandle = {
  imgChange: function (i) {
    imgBring.setAttribute("src", `../../img0103/연예인사진/${nameTest[i]}.jpg`);
  },
  imginfo: function (i) {
    infobox.innerText = `이미지 정보 출력
    src : ${imgBring.getAttribute("src")}
    width : ${imgBring.getAttribute("width")}
    height : ${imgBring.getAttribute("height")}
    이미지 스타일 정보 출력 
    width : ${getStyle.width}
    height : ${getStyle.height}
    border-Style : ${getStyle.border}
    OriginphotoForm : ${getStyle.transformOrigin}`;
  },
};

btn[0].addEventListener("click", () => allEventHandle.imgChange(0));
btn[1].addEventListener("click", () => allEventHandle.imgChange(1));
btn[2].addEventListener("click", () => allEventHandle.imgChange(2));
btn[3].addEventListener("click", () => allEventHandle.imgChange(3));
btn[4].addEventListener("click", () => allEventHandle.imgChange(4));
btn[5].addEventListener("click", () => allEventHandle.imgChange(5));

infobtn[0].addEventListener("click", () => allEventHandle.imginfo(0));
