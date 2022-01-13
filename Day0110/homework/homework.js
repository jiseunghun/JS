const nameValue = document.querySelector(".input_subject_name");
const htmlValue = document.querySelector(".input_subject_html");
const cssValue = document.querySelector(".input_subject_css");
const jsValue = document.querySelector(".input_subject_js");
const inputBtn = document.querySelector(".subject_btn");
const output = document.querySelectorAll(".output_resource div");
const inputlength = document.querySelectorAll(".textinput input");
const titleaverage = document.querySelector(".title span:nth-child(4)");
const mainoutput = document.querySelector(".output");

console.log(inputlength.length);

console.log(output);

const allEventhandler = {
  submitBtn: function () {
    const nameValueInput = nameValue.value;
    const htmlValueInput = parseInt(htmlValue.value);
    const cssValueInput = parseInt(cssValue.value);
    const jsValueInput = parseInt(jsValue.value);
    let plushtmlcssjs = htmlValueInput + cssValueInput + jsValueInput;
    let average = plushtmlcssjs / (inputlength.length - 1);
    let upaverage = Math.ceil((average * 10) / 10);
    if (nameValueInput == "") {
      alert("이름을 입력하세요.");
      return;
    } else {
      if (isNaN(htmlValueInput)) {
        alert("HTML 창에 올바른 숫자를 입력하세요.");
        return;
      } else if (htmlValueInput > 100) {
        alert("HTML 창에 올바른 숫자를 입력하세요.");
        return;
      } else {
        output[1].innerHTML = `HTML : ${htmlValueInput} 점`;
      }
      if (isNaN(cssValueInput)) {
        alert("CSS 창에 올바른 숫자를 입력하세요.");
        return;
      } else if (cssValueInput > 100) {
        alert("CSS 창에 올바른 숫자를 입력하세요.");
        return;
      } else {
        output[2].innerHTML = `CSS : ${cssValueInput} 점`;
      }
      if (isNaN(jsValueInput)) {
        alert("JS 창에 올바른 숫자를 입력하세요.");
        return;
      } else if (jsValueInput > 100) {
        alert("JS 창에 올바른 숫자를 입력하세요.");
        return;
      } else {
        output[3].innerHTML = `JS : ${jsValueInput} 점`;
      }
      // if (average >= 90) {
      //   output[6].innerHTML = "장학생";
      // } else if (80 <= average && 90 >= average) {
      //   output[6].innerHTML = "합격";
      // } else {
      //   output[6].innerHTML = "불합격";
      // }

      grade =
        average >= 90
          ? (output[6].innerHTML = "장학생")
          : 80 <= average && 90 >= average
          ? (output[6].innerHTML = "합격")
          : (output[6].innerHTML = "불합격");

      mainoutput.classList.remove("hide");
      titleaverage.innerHTML = `${upaverage}`;
      output[4].innerHTML = `합계 : ${plushtmlcssjs}`;
      output[5].innerHTML = `평균 : ${upaverage} (소수 첫째자리에서 올림)`;
      output[0].innerHTML = `이름 : ${nameValueInput}`;
    }
  },
};

inputBtn.onclick = allEventhandler.submitBtn;
