const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

// Determine winning combinations
const gameArray = ['', '', 'X', '', '', 'X', '', '', 'X' ]

// Determine turn
let player = 'X'

// Start game
const onStart = function(event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}


// Make a move
const onSelection = function(event) {

  let position = event.target.id

  if ($(event.target).text() === '') {

    $(event.target).text(player)

    turnSwitch()

    $('#game-message').text(player + '\'s turn')

    api.selection(position, player)
    .then(ui.selectionSuccess)
    .catch(ui.selectionFailure)

  } else {
    $('#game-message').text('Nahhhhhhhhh')
  }
}


// Switch turns
function turnSwitch() {
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}

// Check winner
const onWin = function(gameArray) {
  if (gameArray[0] !== ' ' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[3] !== ' ' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[6] !== ' ' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[0] !== ' ' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[1] !== ' ' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[2] !== ' ' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[0] !== ' ' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    $('#game-message').text("We have a winner!")
  } else if (gameArray[2] !== ' ' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    $('#game-message').text("We have a winner!")
  } else {
    $('#game-message').text("Very cute!")
  }
}

module.exports = {
  onStart,
  onSelection,
  // onWin
}
