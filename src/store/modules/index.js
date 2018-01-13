import axios from 'axios'

const server = 'http://localhost:3000'

const state = {
  message: '',
  companies: [],
  games: [],
  game: null,
  errors: []
}

const mutations = {
  updateMessage (state, payload) {
    state.message = payload
  },
  updateCompanies (state, companies) {
    state.companies = companies
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
  loadCompanies ({ commit }) {
    console.log('Trying to get companies')
    return new Promise((resolve, reject) => {
      axios.get(server + '/companies')
        .then(response => {
          console.log(response)
          commit('updateCompanies', response.data)
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
  },
  saveGame ({ commit }, game) {
    return new Promise((resolve, reject) => {
      axios.put(server + '/games/' + game._id, game)
        .then(response => {
          console.log('Save sent')
          console.log(response)
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
