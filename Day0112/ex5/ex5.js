const inputValue = document.querySelectorAll(".main_input input");
const selectOption = document.querySelector(".main_input_select");
const output = document.querySelector(".main_result_output");
const selectFirstOptionValue =
  selectOption.options[selectOption.selectedIndex].value;

// console.log(selectFirstOptionValue);

function calculator() {
  let selectOptionValue =
    selectOption.options[selectOption.selectedIndex].value;
  let firstInputValue = parseInt(inputValue[0].value);
  let secondInputValue = parseInt(inputValue[1].value);
  let result = eval(
    `${firstInputValue}${selectOptionValue}${secondInputValue}`
  );

  //   console.log(selectOptionValue);
  //   console.log(typeof firstInputValue);
  if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
    alert("숫자를 입력해주세요");
  } else {
    output.innerHTML = result;
  }
  //  else {
  //     if (selectOptionValue == "+") {
  //   let result = eval(
  //     `${firstInputValue}${selectOptionValue}${secondInputValue}`
  //   );
  //   output.innerHTML = result;
  // } else if (selectOptionValue == "-") {
  //   let result = eval(
  //     `${firstInputValue}${selectOptionValue}${secondInputValue}`
  //   );
  //   output.innerHTML = result;
  // } else if (selectOptionValue == "*") {
  //   let result = eval(
  //     `${firstInputValue}${selectOptionValue}${secondInputValue}`
  //   );
  //   output.innerHTML = result;
  // } else {
  //   let result = eval(
  //     `${firstInputValue}${selectOptionValue}${secondInputValue}`
  //   );
  //   output.innerHTML = result;
  // }
  //   }
}

selectOption.onchange = calculator;
