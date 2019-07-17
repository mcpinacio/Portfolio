import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-144042790-1',
  router
})

new Vue({
	created () {
    AOS.init()
  	},
  router,
  render: h => h(App)
}).$mount('#app')

