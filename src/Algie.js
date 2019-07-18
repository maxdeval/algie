function algie_connect4(row1, row2, row3, row4, row5, row6) {

  var test
  test = _.concat(row1,row2,row3,row4,row5,row6)
  console.log(test)


  var counter = 0

  for (var i = 0; i<winCombination.length; i++) {
    var count = 0
    for (var j = 0; j<winCombination.length; j++) {
      if(board[winCombination[i][j]] === coin) {
        count ++
      }
      if (count === 3) {
        throw 'player ' + coin + ' won'
      }
    }
  }

/*  for (var i = 0; i < 5; i++) {
    if (row1[i] === row1[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          counter = 0
    }
  }

  for (i = 0; i < 5; i++) {
    if (row2[i] === row2[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row2[i] != row2[i+1]) {
          counter = 0
    }
  }

  for (i = 0; i < 5; i++) {
    if (row3[i] === row3[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          counter = 0
    }
  }

  for (i = 0; i < 5; i++) {
    if (row4[i] === row4[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          counter = 0
    }
  }

  for (i = 0; i < 5; i++) {
    if (row5[i] === row6[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          counter = 0
    }
  }

  for (i = 0; i < 5; i++) {
    if (row6[i] === row6[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row6[i] != row6[i+1]) {
          counter = 0
    }
  }*/


  var winCombination = [[0,1,2,3], [1,2,3,4], [2,3,4,5], [6,7,8,9], [7,8,9,10], [8,9,10,11], [12,13,14,15], [13,14,15,16], [17,18,19,20],[18,19,20,21], [22,23,24,25], [23,24,25,26], [24,25,26,27], [25,26,27,28], [26,27,28,29], [30,31,32,33], [31,32,33,34], [32,33,34,35]]

  return false

}
algie_connect4(
        ["x", "x", "x", "x", "x", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "o", "x", "x", "x", "o"],
        ["o", "x", "o", "o", "x", "o"],
        ["o", "x", "o", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )


