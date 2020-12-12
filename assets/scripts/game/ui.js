const store = require('./../store.js')

// Start Game success
const startGameSuccess = function (response) {
  $('#body-message').hide()
  $('.start-game').hide()
  $('.board').show()
  $('#game-message').show()

  store.game = response.game

  console.log(response.game)
}

// When player has successfully made a move
const selectionSuccess = function (response) {
  // $(response).text('X')

  store.game = response.game

  console.log(response.game)
}

module.exports = {
  startGameSuccess,
  selectionSuccess
}
