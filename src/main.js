// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/server'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

// import store from './store/server'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
