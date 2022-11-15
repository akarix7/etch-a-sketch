const container = document.querySelector("#container");
window.addEventListener("load", startup, false);
// const cell = document.querySelectorAll(".box");

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++) {
            createDiv(Math.floor((750 - gridSize*2)/gridSize));
        }
    }
    fillBox("000");
}

function destroyGrid(){
    const cell = document.querySelectorAll(".box");

    console.log("hey " + cell.length);
    cell.forEach((c) => {
        console.log("WHY");
        c.remove();
    })
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

    if(color.includes("#"))
        color = color.slice(1);


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

function clearGrid(){
    const cell = document.querySelectorAll(".box");

    cell.forEach((c) => {
        c.style.backgroundColor = "#FFF";
    })
}


function startup(){
    const buttons = document.querySelectorAll(".btn");
    const colorWell = document.querySelector("#colorWell");
    const clear = document.querySelector("#clear");
    const gridSize = document.querySelector("#gridSize");
    const defaultValue = document.getElementById("gridSize").value;

    createGrid(16);
    colorWell.value = "#0033CC";

    clear.addEventListener("click", () => {
        clearGrid();
    })

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            fillBox(`${button.value}`);
        })
    })

    colorWell.addEventListener("input", (e) => {
        fillBox(`${e.target.value}`);
    })

    gridSize.addEventListener("change", () => {
        let newValue = document.getElementById("gridSize").value;

        if(defaultValue !== newValue)
            destroyGrid();

        createGrid(newValue);
        //createGrid(16 || `${e.target.value}`)
    })
}