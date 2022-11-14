const container = document.querySelector("#container");
window.addEventListener("load", startup, false);

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++) {
            createDiv(Math.floor((750 - gridSize*2)/gridSize));
        }
    }
    fillBox("000");
}

function createDiv(size){
    let square = document.createElement("div");
    square.className = "box";
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    container.appendChild(square);
}

function fillBox(color){
    const cell = document.querySelectorAll(".box");
    if(color.includes("#")) {
        color = color.slice(1);
    }

    cell.forEach((c) => {
        c.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `#${color}`;
    }, false)
    });

    cell.forEach((c) => {
        c.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = `#${color}`;
    }, false)
    });
}


function startup(){
    const buttons = document.querySelectorAll(".btn");
    const colorWell = document.querySelector("#colorWell");

    createGrid(16);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            fillBox(`${button.id}`);
        })
    })

    colorWell.addEventListener("input", (e) => {
        fillBox(`${e.target.value}`);
    })
}