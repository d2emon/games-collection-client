import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import AddGame from '@/components/AddGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/add',
      name: 'AddGame',
      component: AddGame
    }
  ]
})
