document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
};
  var sides = 4;

  for (var x = 0; x < sides; x++) {
    for (var y = 0; y < sides; y++) {
      var cellNumber = cellNumber++
      board.cells.push ({
        row: x,
        col: y,
        isMine: Math.floor(Math.random()*2),
        isMarked: false,
        hidden: true,
        surroundingMines: 0
      })
    }
  }

  /*
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0}, 
    {row: 0, col: 1, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0}, 
    {row: 0, col: 2, isMine: true, isMarked: false, hidden: true, sourroundingMines: 0}, 
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0},
    {row: 1, col: 0, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0},
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, sourroundingMines: 0},
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0},
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, sourroundingMines: 0}
  ]
}; */

function startGame () {
  for (let i = 0; i < board.cells.length; i++)
  countSurroundingMines (board.cells[i]);
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var c = 0; c < board.cells.length; c++) {
    var check = board.cells[c];
    if (check.isMine && !check.isMarked) {
      return; 
    } else if (!check.isMine && check.hidden) {
      return;
    } 
  }
  lib.displayMessage('You win!');
}
    
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0
  for (var i = 0; i<surrounding.length; i++) {
    if (surrounding[i].isMine) {
    count++
    }
  }
  return count;
}

/*
function countNumberOfIsMine () {
  var numberOfCells = board.cells.length;
  isMineCount = 0;
  for (var i = 0; i < numberOfCells.length; i++)
  if (board.cells.isMine) {
  isMineCount++
  }
  return isMineCount;
  console.log (isMineCount);
}

*/