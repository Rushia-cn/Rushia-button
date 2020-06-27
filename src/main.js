import Vue from 'vue'

import App from './App.vue'
import { i18n } from './i18n.js'
import store from './vuex'
import router from './router'
import play from '@/player'

Vue.prototype.$play = play
Vue.prototype.$ft = (path, obj) => {
  return i18n._t(path, i18n.locale, obj)
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
