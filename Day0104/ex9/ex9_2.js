const inputB = document.querySelector(".name");

function hello() {
  //   let a = confirm("확인을 누르세요");

  //   if (a === true) {
  //     alert("확인");
  //   } else {
  //     alert("취소");
  //   }

  let name = prompt("이름을 입력하세요", "이영자");

  alert(`내 이름은 ${name} 입니다.`);
}

inputB.addEventListener("click", hello);
