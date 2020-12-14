'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./authorization/events.js')
const gameEvents = require('./game/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Hide 'Change Password' & 'Sign Out' options
  $('.authenticated').hide()
  // Hide Board
  $('.board').hide()
  // Hide turn-message
  $('#game-message').hide()
  // Hide winner-modal
  $('#winner-modal-message').modal('hide')
  // Authorization event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Revert authorization messages in modals
  $('#sign-up-close').on('click', authEvents.onClose)
  $('#change-password-close').on('click', authEvents.onClose)
  // Start game event listener
  $('#start-game-button').on('click', gameEvents.onStart)
  // Board space event listener
  $('.col-4').on('click', gameEvents.onSelection)
  // Restart game event listeners
  $('#new-game-button').on('click', gameEvents.onRestart)
  $('#restart-game-button').on('click', gameEvents.onRestart)
  // Get number of games played
  $('#get-games').on('click', gameEvents.onGetGames)
})
