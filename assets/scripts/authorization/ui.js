const store = require('./../store.js')
const gameArray = require('./../game/events.js')

const signUpSuccess = function() {
  $('#sign-up-message').text('You\'re in!')
  $('form').trigger('reset')
}

const signUpFailure = function(error) {
  $('#sign-up-message').text('Aw, shucks.')
  $('form').trigger('reset')
}

const signInSuccess = function(response) {
  $('#body-message').text('Ya made it!')
  $('form').trigger('reset')
  console.log(response.user)

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function(error) {
  $('#body-message').text('Ya goofed.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#password-message').text('Password changed!')
  $('form').trigger('reset')

}

const changePasswordFailure = function (error) {
  $('#password-message').text('Is that the same password?')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#body-message').show()
  $('#body-message').text('Thanks for playing!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.board').hide()
  $('#game-message').hide()

  // $('.col-4').text('')
  // gameArray.forEach((position, index, gameArray) => {
  //   gameArray[index] = '';
  // })

  store.user = null

  console.log(store.user)
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
