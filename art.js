"use strict";
let i;
let newDiv;

for (i = 1; i < 10; i++) {
  let artContainer = document.getElementById("artwork" + i);

  for (let newDiv = 1; newDiv < 10; newDiv++) {
    let art = document.createElement("div");
    artContainer.appendChild(art);

    if (i == 1) {
      art.classList.add("box");
      art.style.transform = `scale(0.${newDiv})`;
    }
    if (i == 2) {
      art.classList.add("box");
      art.style.transform = `scale(0.${newDiv})`;
      art.style.transform = `rotate(${newDiv * 10}deg)` + `scale(0.4)`;
    }

    if (i == 3) {
      art.classList.add("circle");
      art.style.transform = `scale(0.${newDiv})`;
    }

    if (i == 4) {
      art.classList.add("box");
      art.style.transform = `translate(${newDiv}em,${newDiv}em)` + `scale(0.4)`;
    }
    if (i == 5) {
      art.classList.add("circle");
      art.style.transform = `scale(0.${newDiv / 1.5})`;
    }

    if (i == 6) {
      art.classList.add("circle");
      art.style.transform = `rotate(${newDiv * 20}deg)`;
    }
  }
}
