const container = document.querySelector(".container");
const button = document.querySelector(".button-container button");

function createGrid(size) {
    let count = 1;
    let i = 0;
    while (i < size) {
        let j = 0;
        while (j < size) {
            const square = document.createElement("div");
            square.classList.add(`space`);
            square.setAttribute("style", "height: 20px; width: 20px; background-color: white; border: black solid 2px; flex: 1 0 0")
            container.appendChild(square);
            if (count % size == 0) {
                const nextLine = document.createElement("div");
                nextLine.setAttribute("style", "width: 0; flex: 0 0 100%");
                container.appendChild(nextLine);
            }
            count += 1;
            j += 1;
        }
        i += 1;
    }
    const squares = document.querySelectorAll(".space");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${Math.round(Math.random() * 256)}, 
            ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
        }, {once: true});
    });
}

button.addEventListener("click", () => {
    let gridSize = prompt("Enter a grid-size from 1 to 100");
    while (isNaN(gridSize) || (!isNaN(gridSize) && (gridSize > 100 || gridSize < 1)))
        gridSize = prompt("Invalid input. Enter a grid-size from 1 to 100");
    createGrid(gridSize);
}, {once: true});