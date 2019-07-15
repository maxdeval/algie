function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

function algie_playWar() {

  var length = prompt("chose the number of cards to have")
  var max = prompt("chose the max value you can have for a card")
  var player1Hands = randomArray(_.toInteger(length), _.toInteger(max))
  var player2Hands = randomArray(_.toInteger(length), _.toInteger(max))
  console.log(player1Hands)
  console.log(player2Hands)

}

algie_playWar()
