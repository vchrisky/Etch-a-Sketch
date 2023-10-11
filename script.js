let divContainer = document.querySelector('.div-container');

let numRows = 100;
let numColumns = 100;
let numContent = 1;


for (let i = 0; i < numColumns; i++) {
    let squareRow = document.createElement('div');
    squareRow.classList.add('grid-columns');
    divContainer.appendChild(squareRow);

    for (let j = 0; j < numRows; j++) {
        let squareDiv = document.createElement('div');
        // squareDiv.textContent = `${numContent}`;
        squareDiv.classList.add('grid-square');
        squareRow.appendChild(squareDiv);
        // numContent++;
    }
}
let square = document.querySelectorAll('.grid-square');

square.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.add('grid-square-hover');    
    })
});
