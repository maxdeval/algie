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

  console.log(grid[2][0])



}

algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "o", "x", "x", "o", "x"],
        ["o", "x", "o", "o", "o", "o"],
        ["o", "x", "o", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )


