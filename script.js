let color = "black";
let clicked = true;
let board = document.querySelector(".board");
function populateGrid(size) {
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
   
      square.addEventListener("mouseover", colorSquare);
      board.appendChild(square);
      
 
  }
}
let input = document.querySelector("input");

populateGrid(100);
function getSize() {
  if (input.value > 100 || input.value < 2) alert("Not valid grid");
  populateGrid(input.value);
}

function colorSquare() {
  if (clicked) {

    if (color == "random") {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      this.style.backgroundColor = bgColor;
    }
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBackground() {
  const boxes = document.querySelectorAll(".board > div");

  boxes.forEach((box) => {
    box.remove();
  });
  populateGrid(100);
  color = "black"
}

document.querySelector("body").addEventListener("click", () => {
  clicked = !clicked
})
