//elementi presi con id
const myButton =document.getElementById('generator')
const myGrid =document.getElementById('grid')




//evento al click del bottone
myButton.addEventListener('click', function () {
    
//livelli di difficoltà
let difficultyChoice = document.getElementById('difficulty-choice')
let cellMax = parseInt(difficultyChoice.value)
console.log(cellMax);   

if (cellMax == 100) {
    generatedGrid100()
}
else if (cellMax == 81){
    generatedGrid81()
}
else if (cellMax == 49){
    generatedGrid49()
}
})


//funzione per creare la griglia 100
function generatedGrid100() {
//ciclo per creare le celle
    for (let i = 1; i <= 100; i++) {
        const cell =document.createElement('div')
        cell.classList.add('cell-100')
        cell.innerText=(i)
        myGrid.append(cell)

//evento al click della cella
        cell.addEventListener('click', function (){
        coloredCell()
})

//funzione per colorare le celle
function coloredCell(){
    cell.classList.add('bg-cell')
    console.log(i);
}  
}    
}

//funzione per creare la griglia 81
function generatedGrid81() {
    //ciclo per creare le celle
        for (let i = 1; i <= 81; i++) {
            const cell =document.createElement('div')
            cell.classList.add('cell-81')
            cell.innerText=(i)
            myGrid.append(cell)
    
    //evento al click della cella
            cell.addEventListener('click', function (){
            coloredCell()
    })
    
    //funzione per colorare le celle
    function coloredCell(){
        cell.classList.add('bg-cell')
        console.log(i);
    }  
    }    
    }
    
//funzione per creare la griglia 49
function generatedGrid49() {
    //ciclo per creare le celle
        for (let i = 1; i <= 49; i++) {
            const cell =document.createElement('div')
            cell.classList.add('cell-49')
            cell.innerText=(i)
            myGrid.append(cell)
    
    //evento al click della cella
            cell.addEventListener('click', function (){
            coloredCell()
    })
    
    //funzione per colorare le celle
    function coloredCell(){
        cell.classList.add('bg-cell')
        console.log(i);
    }  
    }    
    }


