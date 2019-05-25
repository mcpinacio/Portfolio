import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recollections from './views/recollections.vue'
import TOBE from './views/tobe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/recollections',
      name: 'recollections',
      component: Recollections
    },
     {
      path: '/projects/tobe',
      name: 'tobe',
      component: TOBE
    },
      // 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  }
})
