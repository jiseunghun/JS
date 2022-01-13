const selectMain = document.querySelector(".select_main");
const mainimg = document.querySelector(".main_img");

const imgSelectValueFrist = selectMain.options[selectMain.selectedIndex].value;
mainimg.setAttribute("src", imgSelectValueFrist);

function imgChoice() {
  let imgSelectValue = selectMain.options[selectMain.selectedIndex].value;
  mainimg.setAttribute("src", imgSelectValue);
}

selectMain.onchange = imgChoice;
