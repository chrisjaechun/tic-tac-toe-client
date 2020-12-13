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
const onStart = function(event) {
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
const onSelection = function(event) {

  let position = event.target.id

  if ($(event.target).text() === '') {

    $(event.target).text(player)
    gameArray[position] = player

    onWin()

    turnSwitch()

    $('#game-message').text(player + '\'s turn')

    // onDraw()

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

// Check for winner
const onWin = function() {
  console.log(gameArray)
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
const onRestart = function() {
  $('#winner-modal-message').modal('hide')
  $('#draw-modal-message').modal('hide')
  $('.col-4').text('')
  gameArray.forEach((position, index, gameArray) => {
    gameArray[index] = '';
  });
}

module.exports = {
  onStart,
  onSelection,
  onRestart
}
