function createGrid(numColumns, numRows) {
    for (let i = 0; i < numColumns; i++) {
        let squareRow = document.createElement('div');
        squareRow.classList.add('grid-column');
        divContainer.appendChild(squareRow);
    
        for (let j = 0; j < numRows; j++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('grid-square');
            squareRow.appendChild(squareDiv);
        }
    }
}

let divContainer = document.querySelector('.div-container');
let displaySides = document.querySelector('.display-sides');

let numColumns = 16;
let numRows = 16;

createGrid(numColumns, numRows);
displaySides.textContent = `GRID: ${numColumns} x ${numRows}`;

// Add an event listener to change the class for every square.
let squares = document.querySelectorAll('.grid-square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.add('grid-square-hover');    
    })
});

let btnContainer = document.querySelector('.button-container');

let gridSizeBtn = document.createElement('button');
gridSizeBtn.textContent = 'Change Grid Size';
btnContainer.appendChild(gridSizeBtn);

gridSizeBtn.addEventListener('click', () => {
    let userSides = +prompt('How many sides wud u Like?');

    if (userSides > 100) {
        alert('The maximum limit is 100! Please enter a value that is not past 100');
    }else if (userSides < 0){
        alert('The minimum limit is 1! Please enter a value that isn\'t less than 1');
    }else if(userSides > 0 && userSides <= 100){
    divContainer.innerHTML = '';
    let numRows=numColumns=userSides;
    createGrid(numColumns, numRows);
    displaySides.textContent = `GRID: ${numColumns} x ${numRows}`;
    }
    
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      square.addEventListener('mouseover', () => {
        square.classList.add('grid-square-hover');    
      })
    });  
})

// A button to randomize color in each square
let randomRgbBtn = document.createElement('button');
randomRgbBtn.textContent = 'Randomize Color';
btnContainer.appendChild(randomRgbBtn);

randomRgbBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      square.addEventListener('mouseover', () => {
        rgbValue1 = Math.floor(Math.random()*255);
        rgbValue2 = Math.floor(Math.random()*255);
        rgbValue3 = Math.floor(Math.random()*255);
        square.style.cssText = `background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3});`;    
      })
    });  
})
