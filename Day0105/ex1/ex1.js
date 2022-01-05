const tagMake = document.querySelector("body");
const divMake = document.createElement("div");

for (let i = 0; i < 11; i++) {
  divMake.className = i;
  let pickDiv = document.querySelector(".${i}");
  pickDiv.innerHTML = i;
  tagMake.prepend(pickDiv);
}
