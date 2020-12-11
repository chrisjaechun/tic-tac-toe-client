const config = require('./../config')
const store = require('./../store')

// POST new game
const startGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}


// Patch player move
const selection = function (position, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer '+ store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": position,
          "value": player
        },
        "over": false
      }
    }
  })
}

module.exports = {
  startGame,
  selection
}
