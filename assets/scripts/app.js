'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./authorization/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Hiding 'Change Password' & 'Sign Out' options
  $('.authenticated').hide()
  // Authorization event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents. onSignOut)
})

// $(document).ready(function () {
//   $('#signUpModalBtn').click(function () {
//     $('#sign-up-modal').modal('show');
//   })
//   $('#changePasswordModalBtn').click(function () {
//     $('#change-password-modal').modal('show');
//   })
// })
