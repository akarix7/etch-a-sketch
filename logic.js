const container = document.querySelector("#container");

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

function colorChooser(){
    const buttons = document.querySelectorAll(".btn");
    // const black = document.querySelector("#black");
    // const clear = document.querySelector("#clear");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            fillBox(`${button.id}`);
        })
    })

}

createGrid(16);
colorChooser();