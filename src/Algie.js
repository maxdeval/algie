function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

function compareArray(array1, array2) {
  if (_.first(array1) > _.last(array2)) {
    return " Player1 wins with all cards" + _.toArray(_.concat(array1, array2))
  }
  else {
    return " Player2 wins with all cards" + _.toArray(_.concat(array1, array2))
  }
}

function algie_playWar() {

  var length = prompt("chose the number of cards to have")
  var max = prompt("chose the max value you can have for a card")
  var player1Hands = randomArray(_.toInteger(length), _.toInteger(max)).sort()
  var player2Hands = randomArray(_.toInteger(length), _.toInteger(max)).sort(function(a, b){return b-a});

  return compareArray(player1Hands, player2Hands)

}

algie_playWar()
