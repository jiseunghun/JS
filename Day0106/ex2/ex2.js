const input_text = document.querySelector(".input_Text");
const test_1 = document.querySelector(".test_1");
const test_2 = document.querySelector(".test_2");
const button = document.querySelector(".buttonTest");
const input_Now1 = document.querySelector(".input_Text_NOW1");
const input_Now2 = document.querySelector(".input_Text_NOW2");
const now_test_1 = document.querySelector(".out_1");
const now_test_2 = document.querySelector(".out_2");

button.onclick = function () {
  let data = input_text.value;

  if (isNaN(data)) {
    test_2.innerText = `${data} is String`;
  } else {
    test_2.innerText = `${data} is Number`;
  }
};

//eval 문자열 형태의 수식을 계산을 해줌.

const a = "5";
const b = "6";

const plus = `${a}+${b}`;
const multiply = `${a}*${b}`;

console.log(plus);
console.log(multiply);
console.log(eval(plus));
console.log(eval(multiply));

//입력시 바로 나올 수 있는 형태의 결과창을 만들기

//아스키코드를 불러오는 과정인 keyCode 검색하기

input_Now1.onkeyup = function () {
  now_test_1.innerText = input_Now1.value;
};
input_Now2.onkeyup = function (e) {
  if (e.keyCode == 13) {
    now_test_2.innerText = input_Now2.value;
  }
};
