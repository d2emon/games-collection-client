import axios from 'axios'

const server = 'http://localhost:3000'

const state = {
  message: '',
  games: [],
  game: null,
  errors: []
}

const mutations = {
  updateMessage (state, payload) {
    state.message = payload
  },
  updateGames (state, games) {
    state.games = games
  },
  updateGame (state, game) {
    state.game = game
  },
  addError (state, error) {
    state.errors.push(error)
  }
}

const actions = {
  refreshMessage ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(server + '/games')
        .then(response => {
          console.log(response)
          commit('updateMessage', response.data)
          commit('updateGames', response.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          commit('addError', {
            error: error
          })
          resolve()
        })
    })
  },
  loadGame ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(server + '/games/' + id)
        .then(response => {
          console.log(response)
          commit('updateGame', response.data)
          resolve()
        })
        .catch(error => {
          console.log(error)
          commit('addError', {
            error: error
          })
          resolve()
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
