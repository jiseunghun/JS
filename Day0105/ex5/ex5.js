const printBtn = document.querySelector(".printBtn");
const delBtn = document.querySelector(".delBtn");
const testMessage = document.querySelector(".testMessage");
const nameBtn = document.querySelector(".nameBtn");

const allEeventHandle = {
  delClick: function () {
    testMessage.innerText = "";
  },
  printClick: function () {
    testMessage.innerText = "반갑습니다.";
  },
  promptMessage: function () {
    let inputMessage = prompt("your name", "홍길동");
    testMessage.innerText = inputMessage;
  },
};

delBtn.addEventListener("click", allEeventHandle.delClick);
printBtn.addEventListener("click", allEeventHandle.printClick);
nameBtn.addEventListener("click", allEeventHandle.promptMessage);
