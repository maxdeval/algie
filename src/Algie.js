/*function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}

function checkWin(grid) {

    // bas
    for (r = 0; r < _.size(grid); r++)
        for (c = 0; c < _.size(grid); c++)
            if (checkLine(grid[r][c], grid[r+1][c], grid[r+2][c], grid[r+3][c]))
                return true;

    // droit
    for (r = 0; r < _.size(grid); r++)
        for (c = 0; c < _.size(grid); c++)
            if (checkLine(grid[r][c], grid[r][c+1], grid[r][c+2], grid[r][c+3]))
                return true;

    // bas droite
    for (r = 0; r < _.size(grid); r++)
        for (c = 0; c < _.size(grid); c++)
            if (checkLine(grid[r][c], grid[r+1][c+1], grid[r+2][c+2], grid[r+3][c+3]))
                return true;

    // bas gauche
    for (r = 3; r < _.size(grid); r++)
        for (c = 0; c < _.size(grid); c++)
            if (checkLine(grid[r][c], grid[r-1][c+1], grid[r-2][c+2], grid[r-3][c+3]))
                return true;
    return false;
}
*/

/*function checkColums(board, columns, rows) {
  for (var y = 0; y < columns; y++) {
    var consecutive = 0;
    for (var x = 0; x < rows; x++) {
      if (board[y][x] == "x") {
        consecutive++;
        if (consecutive == 4) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkRows(board, columns, rows) {
  for (var x = 0; x < rows; x++) {
    var consecutive = 0;
    for (var y = 0; y < columns; y++) {
      if (board[y][x] == 1) {
        consecutive++;
        if (consecutive == 4) {
          return true;
        }
      }
    }
  }
  return false;
}

// Example:
var board = [
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 1, 0]
];
*/

function algie_connect4(row1, row2, row3, row4, row5, row6) {

/*  var grid = _.concat(row1,row2,row3,row4,row5,row6)

  var winCombination = [[0,1,2,3], [1,2,3,4], [2,3,4,5], [6,7,8,9], [7,8,9,10], [8,9,10,11], [12,13,14,15], [13,14,15,16], [17,18,19,20],[18,19,20,21], [19,20,21,22], [20,21,22,23], [24,25,26,27], [25,26,27,28], [26,27,28,29], [30,31,32,33], [31,32,33,34], [32,33,34,35], [0,6,12,18], [6,12,18,24, 12], [12,18,24,30], [1,7,13,19,25], [13,19,25,31], [7,13,19,25], [2,8,14,20], [8,14,20,26],[14,20,26,32], [3,9,15,21], [9,15,21,27], [15,21,27,33], [4,10,16,22,], [10,16, 22,28], [16,22,28,34], [5,11,17,23], [11,17,23,29],[17,23,29,35],[0,7,14,21], [1,8,15,22], [2,9,16,23], [6,13,20,27], [7,14,21,28], [8,15,22,29], [12,19,26,33], [13,20,27,34], [14,21,28,35]]

  var count = 0
  for (var i = 0; i<winCombination.length; i++) {
    count = 0
    for (var j = 0; j<winCombination.length; j++) {
      if(grid[winCombination[i][j]] === 'x') {
        count ++
      }
      if (count === 4) {
        return true
      }
    }
  }

  for (var i = 0; i<winCombination.length; i++) {
    count = 0
    for (var j = 0; j<winCombination.length; j++) {
      if(grid[winCombination[i][j]] === 'o') {
        count ++
      }
      if (count === 4) {
        return true
      }
    }
  }*/

  var grid = [row1, row2, row3, row4, row5, row6]
  var counter

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < row1.length; j++) {
      if (_.size(row1) != j && grid[i][j] === grid[i][j+1] && grid[i][j] != " ") {
        temp = grid[i][j]
        console.log("counter " + counter)
        counter = counter + 1
      }
      console.log("temp " + temp)
      console.log("grid[i][j] " + grid[i][j])
      console.log("_.size(row1) " + _.size(row1) + " j " + j)
      if (_.size(row1)-1 === j && temp === grid[i][j] && grid[i][j] != " ") {
        console.log("counter2 " + counter)
        counter = counter + 1
      }      
      if (counter === 4) {
        return true
      }
      if (grid[i][j] != grid[i][j+1]) {
        //console.log("dans le else")
        counter = 0
      }
    }
  }



}

algie_connect4(
        [" ", " ", "o", " ", " ", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "x", "x", "x", "x", "x"],
        ["o", "x", "x", "o", "x", "o"],
        ["o", "x", "x", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )


