const congratulations = document.querySelector(".mainBox_alert");
const inputValue = document.querySelector("#text");
const go = document.querySelector(".go");
const reset = document.querySelector(".reset");
const randomText_info = document.querySelector(".mainBox_textBox");
const div = document.createElement("div");

const numberCount = document.querySelector(".mainBox_alert h2");

let randomNumber_arr = [];

const allEventhandler = {
  goBtn: function () {
    let inputData = Number(inputValue.value);
    automatic = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(randomNumber);
      if (inputData == "") {
        alert("숫자을 입력하세요");
        clearInterval(automatic);
      } else if (isNaN(inputData)) {
        alert("숫자만 입력하세요");
        clearInterval(automatic);
      } else {
        randomText_info.classList.remove("hide");
        if (inputData === randomNumber) {
          clearInterval(automatic);
          congratulations.classList.remove("alert");
          randomText_info.classList.add("hide");
          numberCount.innerHTML = `${randomNumber_arr.length}번 만에 맞췄습니다.`;
          randomNumber_arr = [];
        } else {
          randomText_info.append(`${randomNumber} `);
          randomNumber_arr.push(randomNumber);
          congratulations.classList.add("alert");
        }
      }
    }, 100);
  },
  resetBtn: function () {
    randomNumber_arr = [];
    inputValue.focus();
    randomText_info.classList.remove("hide");
    congratulations.classList.add("alert");
    randomText_info.innerHTML = "";
    inputValue.value = "";
    clearInterval(automatic);
  },
};

go.addEventListener("click", allEventhandler.goBtn);
reset.addEventListener("click", allEventhandler.resetBtn);

//몇번째에서 찾았는지 만들어보기.. 해결
