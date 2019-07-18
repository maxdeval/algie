function algie_connect4(row1, row2, row3, row4, row5, row6) {

  var counter = 0

  for (var i = 0; i < 5; i++) {
    if (row1[i] === row1[i+1]) {
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          counter = 0
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
  }


  
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
