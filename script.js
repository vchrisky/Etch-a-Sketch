let divContainer = document.querySelector('.div-container');

let numRows = 4;
let numColumns = 4;

for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        divContainer.appendChild(squareDiv);
    }
}

