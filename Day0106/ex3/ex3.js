$("div.a")
  .css("border", "2px solid orange")
  .css("color", "red")
  .css("font-size", "2em");

//여러개의 스타일을 한번에 적용하고자 할경우

$("div.b").css({
  color: "blue",
  "background-color": "yellow",
  width: "200px",
  height: "200px",
  "font-size": "30px",
});

$("div b").css("font-family", "궁서체");

$("b").css({
  "font-size": "20px",
  color: "gray",
});

$("#happy").css({
  height: "150px",
  width: "150px",
  "background-color": "pink",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
});
