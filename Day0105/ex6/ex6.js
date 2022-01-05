const btn = document.querySelectorAll(".buttonList_chain button");
const imgBring = document.querySelector("img");

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
};

btn[0].addEventListener("click", () => allEventHandle.imgChange(0));
btn[1].addEventListener("click", () => allEventHandle.imgChange(1));
btn[2].addEventListener("click", () => allEventHandle.imgChange(2));
btn[3].addEventListener("click", () => allEventHandle.imgChange(3));
btn[4].addEventListener("click", () => allEventHandle.imgChange(4));
btn[5].addEventListener("click", () => allEventHandle.imgChange(5));
