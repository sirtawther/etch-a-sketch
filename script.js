const board = document.querySelector(".board");
let gridSize;
let isDrawing = false;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    let width = Math.floor(500 / size);
    let height = Math.floor(500 / size);
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = "white";
    board.appendChild(box);

    box.addEventListener("mouseover", drawColor);

    box.addEventListener("mousedown", () => (isDrawing = true));
    box.addEventListener("mouseup", () => (isDrawing = false));
  }
}

function getGridSize() {
  board.innerHTML = "";
  const input = document.querySelector("input");
  gridSize = Number(input.value);
  createGrid(gridSize);
}

function drawColor() {
  if (isDrawing) {
    let select = document.querySelector("select");
    if (select.value == "grey") {
      this.style.backgroundColor = "grey";
    } else if (select.value == "rainbow") {
      this.style.backgroundColor = random_bg_color();
    } else if (select.value == "eraser") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}
function resetAll() {
  board.innerHTML = ""
  document.querySelector("input").value = ""
  document.querySelector("select").value = ""
  createGrid(16)
}
createGrid(16);