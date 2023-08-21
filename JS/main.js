//elementi presi con id
const myButton =document.getElementById('generator')
const myGrid =document.getElementById('grid')

//evento al click
myButton.addEventListener('click', function () {
    generatedGrid()
})

//funzione per creare la griglia
function generatedGrid() {
//ciclo per creare le celle
    for (let i = 1; i <= 100; i++) {
        const cell =document.createElement('div')
        cell.classList.add('cell')
        cell.innerText=(i)
        myGrid.append(cell)
    }
}

