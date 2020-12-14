const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

  // console.log(data)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// To reset form text upon close
const onClose = function (event) {
  $('#signUpModal').text('Create an account')
  $('#sign-up-message').text('')
  $('#changePasswordModal').text('Change your password')
  $('#password-message').text('')
  $('form').trigger('reset')
}

// To revert text back in body message, after sign-out
const clickRefresh = function (event) {
  $('#body-message').text('SIGN IN TO PLAY')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClose,
  clickRefresh
}
