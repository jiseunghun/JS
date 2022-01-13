const img = document.querySelector("img");

let imgsrc = img.getAttribute("src");

const allEventHandler = {
  imgEnter: function () {
    let newimgsrc = img.setAttribute(
      "src",
      "../../img0103/연예인사진 (2)/10.jpg"
    );
  },
  imgOut: function () {
    img.setAttribute("src", imgsrc);
  },
};

img.onmouseenter = allEventHandler.imgEnter;
img.onmouseout = allEventHandler.imgOut;
