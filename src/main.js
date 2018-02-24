import Vue from 'vue'
// import Vuex from 'vuex' // ?
import Vuetify from 'vuetify'
// import BootstrapVue from 'bootstrap-vue'
// import VueCookie from 'vue-cookie'
import router from './router'
import store from './store'
// import 'vuetify/dist/vuetify.css'
import App from './App'

// import 'vue-material-design-icons/styles.css'
// import 'mdi/css/materialdesignicons.css'

Vue.config.productionTip = false

// Vue.use(Vuex)
Vue.use(Vuetify)
// Vue.use(VueCookie)
// Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
