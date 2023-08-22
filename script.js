const container = document.querySelector(".container")


const gridSize = prompt("Please enter grid size!")

for (let i=0; i < gridSize*gridSize; i++) {
    const div = document.createElement("div")
    div.classList.add("gridBox")
    const pixel = 960/gridSize -2
    div.setAttribute("style", `width:${pixel}px;height:${pixel}px`)
    container.appendChild(div)
}

