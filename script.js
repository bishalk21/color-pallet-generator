const pallet = document.getElementById("pallet");
const generateBtn = document.getElementById("generate");

function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

function generate() {
  pallet.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = generateRandomColor();
    div.classList.add("col");

    let copy = document.createElement("div");
    copy.innerHTML = `<p>${div.style.backgroundColor}</p>`;
    copy.classList.add("copy");

    div.appendChild(copy);
    pallet.appendChild(div);
  }
}

generate();

generateBtn.addEventListener("click", function () {
  generate();
});
