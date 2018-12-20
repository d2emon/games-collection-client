import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
// import VueCookie from 'vue-cookie'
import 'vuetify/dist/vuetify.min.css'
// import 'vue-material-design-icons/styles.css'
// import 'mdi/css/materialdesignicons.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuex)
// Vue.use(BootstrapVue)
Vue.use(Vuetify)
// Vue.use(VueCookie)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
