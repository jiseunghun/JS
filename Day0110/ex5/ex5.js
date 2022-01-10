const arr1 = ["red", "green", "blue", "pink", "orange"];

document.write("arr1 의 갯수:" + arr1.length + "<br>");
for (i = 0; i < arr1.length; i++) {
  document.write("<b>" + arr1[i] + "</b>&nbsp;");
}

for (i = 0; i < arr1.length; i++) {
  document.write(
    // "<div class='box' style='background-color:" + arr1[i] + ";'></div>");
}

console.log(arr1[2]);
