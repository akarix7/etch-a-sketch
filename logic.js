function createGrid(gridSize){
    const container = document.querySelector("#container");
    for(let i = 0; i < gridSize; i++){
        let square = document.createElement("div");
        container.appendChild(square);
    }
}