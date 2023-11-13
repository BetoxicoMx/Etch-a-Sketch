//Elementos necesarios traidos del html
const contenedor = document.querySelector(".contenedor");
const btnCambiarTamano = document.querySelector("#cambiarTamano");
const btnReset = document.querySelector("#reset");
const inputColor = document.querySelector(".input-color");
const btnArcoiris = document.querySelector(".color_aleatorio");
const btnColorFijo = document.querySelector(".color_fijo");

let _side = 16;
let _size = 256;

// botones eventos
btnCambiarTamano.onclick = preguntarUsuaio;
btnReset.onclick = resetCanvas;
btnArcoiris.onclick = colorRandom;
btnColorFijo.onclick = colorFijo;
inputColor.onchange = colorFijo;

function colorFijo(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.removeEventListener('mouseenter', colorRandom);
        block.onmouseenter = () => block.style.background = inputColor.value;
    });
}

function colorRandom (){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        const rand1 = Math.floor(Math.random() * 255);
        const rand2 = Math.floor(Math.random() * 255);
        const rand3 = Math.floor(Math.random() * 255);
        block.removeEventListener('mouseenter', colorFijo);
        block.onmouseenter = () => block.style.background = `rgb(${rand1}, ${rand2}, ${rand3})`;
    });
}

function preguntarUsuaio (){
    let gridSideSize = prompt('¿Que tamaño quieres para la reticula?');
    while(gridSideSize < 1){ 
        griSideSize = prompt ('ingresa un numero mayor a cero');
    }
    let gridSize = gridSideSize ** 2;
    createNewGrid(gridSize, gridSideSize);
}

function resetCanvas (){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.style.background = '#dddddd');
}

function removeGrid (){
    const existingGrid = document.querySelector('.grid');
    existingGrid.parentNode.removeChild(existingGrid);
}

function createNewGrid(size, side) {
    removeGrid();
    createGrid(size, side);
  }

function colorBlock() {
    this.style.background = inputColor.value;
  }

function createGrid (size, side){
    resetCanvas();
    const grid = document.createElement('div');
    grid.classList.add('grid');
    contenedor.appendChild(grid);
    grid.style.setProperty("--sideSize", side);
    for(let i = 0; i < size; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        grid.appendChild(block);
        block.addEventListener('mouseenter', colorFijo);
    }
}
createGrid(_size, _side);