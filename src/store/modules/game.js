import server from '../connect'

const state = {
  messages: [],
  errors: [],

  games: [],
  game: null,
  genres: [
    'Genre 1',
    'Genre 2'
  ],
  platforms: [
    'PC',
    'Speccy'
  ]
}

const mutations = {
  addMessage (state, payload) {
    state.messages.push(payload)
    console.log('Messages')
    console.log(state.messages)
  },
  addError (state, error) {
    console.error('Error')
    console.error(error)
    state.errors.push(error)
  },
  load (state, game) {
    state.game = game
  },
  update (state, payload) {
    Object.keys(payload).forEach(function (key, index) {
      state.game[key] = payload[key]
    })
    // console.log(state.game)
    // state.game.message = payload
  },
  setGames (state, games) {
    state.games = games
    console.log(state.games)
  }
}

const actions = {
  refreshMessage ({ commit }) {
    return new Promise((resolve, reject) => {
      server.get('/games')
        .then(response => {
          commit('addMessage', response.data)
          commit('setGames', response.data)
          resolve()
        })
        .catch(error => {
          commit('addError', { error: error })
          resolve()
        })
    })
  },
  loadGame ({ commit }, id) {
    return new Promise((resolve, reject) => {
      server.get('/games/' + id)
        .then(response => {
          commit('addMessage', response.data)
          commit('load', response.data)
          resolve()
        })
        .catch(error => {
          commit('addError', { error: error })
          resolve()
        })
    })
  },
  saveGame ({ commit }, game) {
    return new Promise((resolve, reject) => {
      server.put('/games/' + game._id, game)
        .then(response => {
          console.log('Save sent')
          commit('addMessage', response)
          resolve()
        })
        .catch(error => {
          commit('addError', { error: error })
          resolve()
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
