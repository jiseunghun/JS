const numInput = document.querySelectorAll("input");
const goBtn = document.querySelector(".goBtn");
const result = document.querySelector(".result");
const cardOption = document.querySelector("#cardcount");

numInput[0].onkeyup = (e) => {
  inputLength1 = numInput[0].value;

  console.log(inputLength1.length);
  if (inputLength1.length == 4) {
    numInput[1].focus();
  }
};
numInput[1].onkeyup = (e) => {
  inputLength2 = numInput[1].value;

  console.log(inputLength2.length);
  if (inputLength2.length == 4) {
    numInput[2].focus();
  }
};
numInput[2].onkeyup = (e) => {
  inputLength3 = numInput[2].value;

  console.log(inputLength2.length);
  if (inputLength3.length == 4) {
    numInput[3].focus();
  }
};
numInput[3].onkeyup = (e) => {
  let inputLength4 = numInput[3].value;

  console.log(inputLength4.length);
  if (inputLength4.length == 4) {
    goBtn.focus();
  }
};

goBtn.onclick = () => {
  let inputvalue1 = numInput[0].value.trim();
  let inputvalue2 = numInput[1].value.trim();
  let inputvalue3 = numInput[2].value.trim();
  let inputvalue4 = numInput[3].value.trim();

  //   console.log(typeof inputvalue1);

  let cardValue = cardOption.options[cardOption.selectedIndex].value;

  //선택된 옵션 value값을 cardValue 값에 저장함.

  console.log(cardValue);

  if (
    inputvalue1.length != 4 ||
    inputvalue2.length != 4 ||
    inputvalue3.length != 4
  ) {
    alert("각 칸의 값을 올바르게 입력해주세요");
    return;
  } else if (isNaN(inputvalue1) || isNaN(inputvalue2) || isNaN(inputvalue3)) {
    alert("숫자만입력");
    return;
  } else {
    result.innerHTML = `
    선택된 카드 : ${cardValue} <br>
    ${inputvalue1}-${inputvalue2}-${inputvalue3}-${inputvalue4}`;
  }
};
