const store = require('./../store.js')
const gameArray = require('./../game/events.js')

const signUpSuccess = function() {
  $('#body-message').text('YOU\'RE IN! SIGN IN TO PLAY... NOW')
  $('#sign-up-modal').modal('hide')
  $('form').trigger('reset')
}

const signUpFailure = function(error) {
  $('#signUpModal').text('Ruh-roh')
  $('#sign-up-message').text('Shucks. Ya gotta be more original.')
  $('form').trigger('reset')
}

const signInSuccess = function(response) {
  $('#body-message').text('YA MADE IT!')
  $('form').trigger('reset')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function(error) {
  $('#body-message').text('YA GOOFED.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').text('Password changed!')
  $('#password-message').text('That new password smell.')
  $('form').trigger('reset')

}

const changePasswordFailure = function (error) {
  $('#changePasswordModal').text('Hmm, hint below')
  $('#password-message').text('Is that the same password?')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#body-message').show()
  $('#body-message').text('THANKS FOR PLAYING!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.board').hide()
  $('#game-message').hide()

  // $('.col-4').text('')
  // gameArray.forEach((position, index, gameArray) => {
  //   gameArray[index] = '';
  // })

  store.user = null

  // console.log(store.user)
}

const signOutFailure = function () {
  $('#body-message').text('\"You ain\'t going nowhere.\"')

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
