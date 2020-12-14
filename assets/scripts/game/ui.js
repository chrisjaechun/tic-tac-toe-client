const store = require('./../store.js')

// Start Game success
const startGameSuccess = function (response) {
  $('#body-message').hide()
  $('.start-game').hide()
  $('.board').show()
  $('#game-message').show()

  store.game = response.game

  // console.log(response.game)
}

// When player has successfully made a move
const selectionSuccess = function (response) {

  store.game = response.game

  // console.log(response.game)
}


// Getting number of games
const onGetGamesSuccess = function (responseData) {

if (responseData.games.length === 1) {
  $('#number-of-games-played').text('Golly! You\'re playing your first game!')
} else {
  $('#number-of-games-played').text(`You're currently playing game ${responseData.games.length}.`)
}
}

module.exports = {
  startGameSuccess,
  selectionSuccess,
  onGetGamesSuccess
}
