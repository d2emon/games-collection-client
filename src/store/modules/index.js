import axios from 'axios'

const server = 'http://localhost:3000'

const state = {
  message: '',
  errors: []
}

const mutations = {
  updateMessage (state, payload) {
    state.message = payload
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
