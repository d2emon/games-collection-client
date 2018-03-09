import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
// import VueCookie from 'vue-cookie'

import App from './App'
import router from './router'
import store from './store'

// import 'vue-material-design-icons/styles.css'
// import 'mdi/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuex)
// Vue.use(BootstrapVue)
Vue.use(Vuetify)
// Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
