const change = document.querySelectorAll('input[name="color"]');
const changeLength = change.length;
console.log(change);

// const checkedValue = document.querySelector(
//   'input[name="color"]:checked'
// ).value;

function changeColor(event) {
  let checked = event.target.value;
  console.log(checked);
}

// change[0].onchange = changeColor;
// change[1].onchange = changeColor;
// change[2].onchange = changeColor;
// change[3].onchange = changeColor;

for (let i = 0; i < changeLength; i++) {
  change[i].onchange = changeColor;
}
