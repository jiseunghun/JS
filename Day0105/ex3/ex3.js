// document.write('<table border="1">');

// // header
// document.write("<thead>");
// document.write("<tr>");
// for (let i = 2; i <= 9; i++) {
//   document.write("<th>" + i + "단 </th>");
// }
// document.write("</tr>");
// document.write("</thead>");

// // body
// document.write("<tbody>");
// for (let i = 1; i <= 9; i++) {
//   document.write("<tr>");
//   for (let j = 2; j <= 9; j++) {
//     document.write("<td>" + j + " * " + i + " = " + j * i + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</tbody>");

// document.write("</table>");

let dan = prompt("구구단", "2");
console.log(dan);

let tag = "<table class=t>";

tag += "<tr><td>" + dan + "단 출력</td></tr>";

for (let i = 0; i <= 9; i++) {
  tag += `<tr><td> ${dan} X ${i} = ${dan * i} </td></tr>`;
}

tag += "</table>";

document.write(tag);
