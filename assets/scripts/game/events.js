const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onStart = function(event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

module.exports = {
  onStart
}
