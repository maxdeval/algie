function algie_playWar(player1, player2) {

  var numberOfCards = Math.floor((Math.random() * 10) + 1);
  var player1Hands = []
  var player1Hands = _.times(Math.floor((Math.random() * 10) + 1), numberOfCards)
  console.log(_.times(numberOfCards, _.constant(Math.floor((Math.random() * 10) + 1))))
  console.log(player1Hands)

}

algie_playWar("bobby", "lilly")
