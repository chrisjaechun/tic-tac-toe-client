const store = require('./../store.js')

const startGameSuccess = function (response) {
  $('#body-message').hide()
  $('.start-game').hide()
  $('.board').show()
  store.game = response.game

  console.log(response.game)
}

module.exports = {
  startGameSuccess
}
