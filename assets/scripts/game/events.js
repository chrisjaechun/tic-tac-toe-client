const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

// Array for winning combinations
const gameArray = ['', '', '', '', '', '', '', '', '' ]

// Determine turn
let player = 'X'

// Determine draw
// let moves = 1

// Start game
const onStart = function (event) {
  event.preventDefault()

  $('.col-4').text('')
  gameArray.forEach((position, index, gameArray) => {
    gameArray[index] = '';
  });

  const data = getFormFields(event.target)

  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}


// Make a move
const onSelection = function (event) {
  // Target div element by ID
  let position = event.target.id
  // If div is blank
  if ($(event.target).text() === '') {
    // Replace text with player value
    $(event.target).text(player)
    // Add player value to respective array index
    gameArray[position] = player

    // console.log(gameArray)

    onWin()

    turnSwitch()

    // onDraw()

    api.selection(position, player)
    .then(ui.selectionSuccess)
    .catch(ui.selectionFailure)

  } else {
    // Invalid space
    $('#game-message').text('Nahhhhhhhhh')

  }
}


// Switch turns
function turnSwitch() {
  // If gameArray is empty - player is always X
  if (gameArray[0] == "" && gameArray[1] == "" && gameArray[2] == "" && gameArray[3] == "" && gameArray[4] == "" && gameArray[5] == "" && gameArray[6] == "" && gameArray[7] == "" && gameArray[8] == "" && player === 'O') {
    player === 'X'
  } else if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
  $('#game-message').text(player + '\'s turn')
}

// If O wins, player goes back to value of 'X'
function turnReset() {
  if (player === 'O') {
    player = 'X'
  }
}

// Check for winner
const onWin = function () {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    $('#winner-modal-message').modal('show')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    $('#winner-modal-message').modal('show')
  // Check for draw
  } else if (gameArray[0] !== '' && gameArray[1] !== '' && gameArray[2] !== '' && gameArray[3] !== '' && gameArray[4] !== '' && gameArray[5] !== '' && gameArray[6] !== '' && gameArray[7] !== '' && gameArray[8] !== ''){
    $('#draw-modal-message').modal('show')
  } else {
    $('#game-message').text(player + '\'s turn')
  }
}

// Check for draw
// const onDraw = function() {
//   let moves = 1
//   $('.col-4').on('click', function () {
//     ++moves;
//     console.log(moves)
//   if (moves === 9) {
//     $('#draw-modal-message').modal('show')
//     moves = 1
//     }
//   })
// }

// Restart game
const onRestart = function (event) {
  turnSwitch()
  $('#winner-modal-message').modal('hide')
  $('#draw-modal-message').modal('hide')
  // Clear board
  $('.col-4').text('')
  // Clear array
  gameArray.forEach((position, index, gameArray) => {
    gameArray[index] = '';
    // console.log(gameArray)
  turnReset()
  $('#game-message').text(player + '\'s turn')
    // console.log(player)
  });
}

const onGetGames = function (event) {
  $('#get-games-modal').modal('show')

  event.preventDefault()

  const gamesData = getFormFields(event.target)

  api.getGames(gamesData)
   .then(ui.onGetGamesSuccess)
   .catch(ui.onGetGamesFailure)

}

module.exports = {
  onStart,
  onSelection,
  onRestart,
  onGetGames,
  turnReset
}
