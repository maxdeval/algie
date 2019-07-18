function algie_connect4(row1, row2, row3, row4, row5, row6) {

  var counter = 0

  for (var i = 0; i < 5; i++) {
    console.log(counter)
    console.log(row1[i])
    console.log(row1[i+1])
    if (row1[i] === row1[i+1]) {
      console.log("dans le if")
      counter = counter + 1
    }
    if (counter === 4) {
      return true
    }
    if (row1[i] != row1[i+1]) {
          console.log("dans le else")
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
