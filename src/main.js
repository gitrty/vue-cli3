import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

import vant from './plugin/vant'
import common from './common'
import toyo from './components'

Vue
  .use(vant)
  .use(common)
  .use(toyo)

Vue.config.productionTip = false

export const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
