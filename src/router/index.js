import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
// import Empty from '@/containers/Empty'

// Views
import Default from '@/views/Default'
import AddGame from '@/views/AddGame'
import Companies from '@/views/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/games',
      redirect: '/games/',
      name: 'Games',
      component: Full,
      children: [
        {
          path: '/',
          name: 'Games List',
          component: Default
        },
        {
          path: '/add',
          name: 'AddGame',
          component: AddGame
        }
      ]
    },
    {
      path: '/companies',
      redirect: '/companies/',
      name: 'Companies',
      component: Full,
      children: [
        {
          path: '/',
          name: 'Companies List',
          component: Companies
        }
      ]
    },
    {
      path: '/',
      redirect: '/games',
      name: 'Home'
    }
  ]
})
