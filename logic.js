const container = document.querySelector("#container");

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++) {
            createDiv(Math.floor((750 - gridSize*2)/gridSize));
        }
    }
    fillBox();
}

function createDiv(size){
    let square = document.createElement("div");
    square.className = "box";
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    container.appendChild(square);
}

function fillBox(){
    const cell = document.querySelectorAll(".box");
    console.log("hey");

    cell.forEach((c) => { c.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#33CC00";
    }, false)
    });

    cell.forEach((c) => {c.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "#33CC00";
    }, false)
    });
}

createGrid(16);