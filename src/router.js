import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./page/System/home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./page/System/home.vue')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('./page/System/friends.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./page/System/cart.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./page/System/search.vue')
    },
    {
      path: '/home/newslist',
      name: 'newlist',
      component: () => import('./page/Home/newslist.vue')
    }
  ]
})
