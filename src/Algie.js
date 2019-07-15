function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

function algie_playWar(player1, player2) {

  var numberOfCards = Math.floor((Math.random() * 10) + 1);
  var player1Hands = []
  var player1Hands = randomArray(3, 10)
  console.log(player1Hands)
}

algie_playWar("bobby", "lilly")
