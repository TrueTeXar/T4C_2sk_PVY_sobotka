
const allBoxes = document.querySelectorAll(".color"); //všechny divy s barvama
const showThisColor = document.querySelector(".current-color"); //box s aktuální barvou
const colors = document.querySelector(".color-grid .color"); //první odpovídající box s barvou


let selectedIndex = null;


allBoxes.forEach(color => {
     color.addEventListener("click", () => {


        allBoxes.forEach(c => c.classList.remove('selected-color'));

        color.classList.add("selected-color");
        selectedIndex = color;
        console.log(selectedIndex);


         const pickedColor = getComputedStyle(selectedIndex).backgroundColor; //vybraná barva

         showThisColor.style.backgroundColor = pickedColor;
    });



});





/*pohybování šipkama a enter*/


let index = 0;
let thisIndex = 0;
const columns = 2;


function setCursor(index) {
    allBoxes.forEach(c => c.classList.remove("selected-color"));

    allBoxes[index].classList.add("selected-color");

    thisIndex = index;

}


function confirmSelection(index) {
    allBoxes.forEach(c => c.classList.remove("selected-color"));
    allBoxes[index].classList.add("selected-color");
    selectedIndex = index;

    const pickedColor = getComputedStyle(allBoxes[index]).backgroundColor;
    showThisColor.style.backgroundColor = pickedColor;
}











const layoutBox = document.querySelector(".layout");

let layoutWidthNumber = 20;
let layoutHeightNumber = 20;
let cellDim = 20;


let currentBoxColor = showThisColor;

function displayLayout(width, height) {
    layoutBox.innerHTML = "";

    layoutBox.style.display = "grid";           //grid layout

    layoutBox.style.gridTemplateColumns = `repeat(${width}, ${cellDim}px)`;        //roztáhnutí po ose X
    layoutBox.style.gridTemplateRows = `repeat(${height}, ${cellDim}px)`;           //roztáhnutí po ose Y

    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("click", () => {
            cell.style.backgroundColor = currentBoxColor.style.backgroundColor;
        });

        cell.addEventListener("dblclick", () => {
            cell.style.backgroundColor = "white";
        });

        layoutBox.appendChild(cell);
    }

}




displayLayout(layoutWidthNumber, layoutHeightNumber);



const grid = document.querySelector(".color-grid");
const ownCurrentColor = document.getElementById("own-color-box");
const colorAddButton = document.getElementById("submit-color");


colorAddButton.addEventListener("click", () => {

    const newColor = ownCurrentColor.value

    //nový div
    const newDiv = document.createElement("div");
    newDiv.classList.add("color");
    newDiv.classList.add("selected-color");

    newDiv.style.backgroundColor = newColor;     //přidání vybrané barvy

    grid.appendChild(newDiv);

});



