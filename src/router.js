import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recollections from './views/recollections.vue'
//import TOBE from './views/tobe.vue'
import Illustration from './views/illustration.vue'
import TalknWalk from './views/talknwalk.vue'
// import TalknWalk_Web from './views/talknwalk_web.vue'
// import Ipsslab from './views/ipsslab.vue'
import AboutMe from './views/about/about.vue'


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
    //  {
    //   path: '/projects/tobe',
    //   name: 'tobe',
    //   component: TOBE
    // },
    {
      path: '/projects/illustration',
      name: 'illustration',
      component: Illustration
    },
    {
    path: '/projects/talknwalk',
    name: 'talknwalk',
    component: TalknWalk
    },
    // {
    // path: '/projects/talknwalk_web',
    // name: 'talknwalk_web',
    // component: TalknWalk_Web
    // },
    // {
    // path: '/projects/ipsslab',
    // name: 'ipsslab',
    // component: Ipsslab
    // },
    {
      path: '/about',
      name: 'about',
      component: AboutMe
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  }
})
