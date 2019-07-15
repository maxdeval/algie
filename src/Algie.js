function algie_connect4() {
  var board = _.times(36, _.constant('.'))
  console.log(board)
  console.log(printBoard(board))
}

function printBoard(board) {
  return 
         board[0]+board[1]+board[2]+board[3]+board[4]+board[5]+'\n' +
         board[6]+board[7]+board[8]+board[9]+board[10]+board[11]+'\n' +
         board[12]+board[13]+board[14]+board[15]+board[16]+board[17]+'\n' +
         board[18]+board[19]+board[20]+board[21]+board[22]+board[23]+'\n' +
         board[24]+board[25]+board[26]+board[27]+board[28]+board[29]+'\n' +
         board[30]+board[31]+board[32]+board[33]+board[34]+board[35]
}

function move(message, board, coin) {
  var answer = prompt("chose between 1-36 or q to leave")
  var answerToInteger = _.toInteger(answer)
  if(answerToInteger >= 1 && answerToInteger <= 36) {
    board[answerToInteger - 1] = coin
    console.log(printBoard(board))
  }
  else if(answer === 'q') {
    throw 'player ' + coin +' wants to leave'
  }
  else {
    move('error, ', board, coin)
  }
}

algie_connect4()
